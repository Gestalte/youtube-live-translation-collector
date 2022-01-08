# youtube-live-translation-collector
Creates a window in YouTube's the live chat window that shows live translations and spanner comments.

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

# Example Image
This is what it looks like in action:

![youtube-live-translation-collector](https://github.com/Gestalte/youtube-live-translation-collector/blob/Master/liveTL.PNG?raw=true)