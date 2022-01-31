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
`Name [EN]` | `Name [translation]` | `Name [tr]` | `Name [英訳]` | `Name [英訳/EN]`
`/Name [EN]` | `/Name [translation]` | `/Name [tr]` | `/Name [英訳]` | `/Name [英訳/EN]`
`名前 [EN]` | `名前 [translation]` | `名前 [tr]` | `名前 [英訳]` | `名前 [英訳/EN]`
`/名前 [EN]` | `/名前 [translation]` | `/名前 [tr]` | `/名前 [英訳]` | `/名前 [英訳/EN]`
`ナマエ [EN]` | `ナマエ [translation]` | `ナマエ [tr]` | `ナマエ [英訳]` | `ナマエ [英訳/EN]`
`/ナマエ [EN]` | `/ナマエ [translation]` | `/ナマエ [tr]` | `/ナマエ [英訳]` | `/ナマエ [英訳/EN]`
`なまえ [EN]` | `なまえ [translation]` | `なまえ [tr]` | `なまえ [英訳]` | `なまえ [英訳/EN]`
`/なまえ [EN]` | `/なまえ [translation]` | `/なまえ [tr]` | `/なまえ [英訳]` | `/なまえ [英訳/EN]`
