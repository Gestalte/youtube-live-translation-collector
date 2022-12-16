# youtube-live-translation-collector
Creates a window in YouTube's the live chat window that shows live translations and spanner comments.

![youtube-live-translation-collector](https://github.com/Gestalte/youtube-live-translation-collector/blob/Master/liveTL.PNG?raw=true)

# What this is for?
YouTube Live Translation Collector is a script for the [Tampermonkey Add-on](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/). It adds a window to Youtube live stream chat that displays the messages left by the channel owner, moderators (Spanner icon) and viewers doing live translation.

# How are live translations identified?
Currently I do a case insensitive check for messages that start with the following:

EN | translation | tr | 英訳 | 英訳/EN
-- | ----------- | -- | -- | -----
`[EN]` | `[translation]` | `[tr]` | `[英訳]` | `[英訳/EN]`
`EN:` | `translation:` | `tr:` | `英訳:` | `英訳/EN:`
`EN :` | `translation :` | `tr :` | `英訳 :` | `英訳/EN :`
`EN-` | `translation-` | `tr-` | `英訳-` | `英訳/EN-`
`EN -` | `translation -` | `tr -` | `英訳 -` | `英訳/EN -`
`EN}` | `translation}` | `tr}` | `英訳}` | `英訳/EN}`
`EN }` | `translation }` | `tr }` | `英訳 }` | `英訳/EN }`
`/[EN]` | `/[translation]` | `/[tr]` | `/[英訳]` | `/[英訳/EN]`
`/EN:` | `/translation:` | `/tr:` | `/英訳:` | `/英訳/EN:`
`/EN :` | `/translation :` | `/tr :` | `/英訳 :` | `/英訳/EN :`
`/EN-` | `/translation-` | `/tr-` | `/英訳-` | `/英訳/EN-`
`/EN -` | `/translation -` | `/tr -` | `/英訳 -` | `/英訳/EN -`
`/EN}` | `/translation}` | `/tr}` | `/英訳}` | `/英訳/EN}`
`/EN }` | `/translation }` | `/tr }` | `/英訳 }` | `/英訳/EN }`

# Copyright

<a href="http://www.wtfpl.net/"><img
       src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"
       width="80" height="15" alt="WTFPL" /></a>