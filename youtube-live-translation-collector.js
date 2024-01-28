// ==UserScript==
// @name         YouTube Live Translation Collector
// @namespace    https://github.com/Gestalte/youtube-live-translation-collector
// @version      1.3
// @description  Creates a window in YouTube's live chat window, that shows live translations and spanner comments.
// @author       https://github.com/Gestalte
// @match        https://www.youtube.com/live_chat*
// @grant        none
// @license      WTFPL
// ==/UserScript==

var commentIdentifier = (function() {
    // Final Regex: /^\/?((英訳|英訳\/en|en|tr|translation)\s?(:|-|\})|\[(英訳|英訳\/en|en|tr|translation)\]|\((英訳|英訳\/en|en|tr|translation)\)|(英訳|英訳\/en|en|tr|translation)\\s)/i
    
    var basePattern = "^\\/?((§)\\s?(:|-|\\})|\\[(§)\\]|\((§)\)|(§)\s)";
    var thingsToMatch = ["英訳", "英訳\/en", "en", "tr", "translation", "\(en\)"];
    var pattern = basePattern.replace(/§/g, thingsToMatch.join('|'));

    var chat = document.querySelector('#chat');
    var itemScroller = chat.querySelector('#item-scroller');

    return {
        getSticky: function(){
            return document.getElementById('sticky');
        },
        isTranslation: function (txt) {
            return RegExp(pattern, 'i').test(txt)
        },
        isSpecial: function(author) {            

            if (author === null ) {
                return false;
            }

            return author.classList 
                ? (author.classList.contains('moderator') || author.classList.contains('owner')) 
                : author.content.author.classes.indexOf('moderator') > -1;
        },
        identify: function(node) {
            let authorElement = node.querySelector('#author-name');
            let messageElement = node.querySelector('#message');
        
            if(messageElement != null){
                
                let message = messageElement.innerText.trim();
                
                if(commentIdentifier.isSpecial(authorElement) || commentIdentifier.isTranslation(message)) {
                    commentIdentifier.stickComment(node);
                }
            }else{
                console.log(node);
            }
        },
        stickComment: function(node) {
            //var newNode= document.importNode(node,true);            
            //var newNode  =  structuredClone(node);
            //var newNode = JSON.parse(JSON.stringify(node));
            //var newNode = node.getElementById('#message');

            let author = node.querySelector('#author-name');
            let message = node.querySelector('#message');
            let timestamp = node.querySelector('#timestamp');

            //These work!
            let img =  node.querySelector("yt-img-shadow:nth-child(1) > img:nth-child(1)");
            console.log(img);
            let src = img.getAttribute("src")
            console.log(src);

            //let badges = node.querySelectorAll("#chat-badges");
            
            img.removeAttribute("class");
            img.style.borderRadius="25px";

            let ii = img.outerHTML;
            let tso = timestamp.outerHTML;
            let ao = author.outerHTML;
            let mo = message.outerHTML;

            let z = document.createElement('span');
            z.innerHTML = ii;
            z.id = "image-holder";
            // z.style.marginLeft="10px";
            z.style.marginRight="10px";
            z.style.width="24px";
            z.style.height="24px";

            let y = document.createElement('div');
            y.classList.add('yt-live-chat-text-message-renderer');
            y.classList.add('style-scope');
            y.style.padding = "0 24px";
            y.innerHTML =  z.outerHTML+tso+ao+mo;

            console.log(y);

            sticky.appendChild(y); // TODO: Find a way to copy the node instead of moving it.

            itemScroller.scrollTop = itemScroller.scrollHeight;   
            sticky.scrollTop = sticky.scrollHeight;
        }
    }
}());

var monitor = (function(){
    
    var chatItems = document.querySelector('#items.style-scope.yt-live-chat-item-list-renderer');

    return {
        setupWindow: function() {
            // This creates a window at the top of the live chat window 
            // where translations and spanner comments will appear.
            let sticky = document.createElement('div');
            let ticker = document.getElementById('ticker');

            sticky.id = 'sticky';
            sticky.style.maxHeight = '30%';
            sticky.style.overflow = 'auto';
            
            ticker.parentNode.insertBefore(sticky, ticker);
        },
        init: function() {
            // stick items that exist on load
            chatItems.querySelectorAll('yt-live-chat-text-message-renderer').forEach(commentIdentifier.identify); 

            // stick mutations
            let observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach(commentIdentifier.identify);
                });
            });

            // start the observer
            observer.observe(chatItems, { childList: true });
        },
    }
}());

var sticky = '';

(function(){    
    monitor.setupWindow();    
    sticky = commentIdentifier.getSticky();
    window.top.addEventListener('load', monitor.init());
})();
