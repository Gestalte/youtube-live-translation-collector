var testStringsAndExpectedResults = [
    ["[EN] Lorem ipsum dolor sit amet", true],
    ["[translation] Lorem ipsum dolor sit amet", true],
    ["[tr] Lorem ipsum dolor sit amet", true],
    ["[英訳] Lorem ipsum dolor sit amet", true],
    ["[英訳/EN]Lorem ipsum dolor sit amet", true],
    ["EN: Lorem ipsum dolor sit amet", true],
    ["translation: Lorem ipsum dolor sit amet", true],
    ["tr: Lorem ipsum dolor sit amet", true],
    ["英訳: Lorem ipsum dolor sit amet", true],
    ["英訳/EN:Lorem ipsum dolor sit amet", true],
    ["EN : Lorem ipsum dolor sit amet", true],
    ["translation : Lorem ipsum dolor sit amet", true],
    ["tr : Lorem ipsum dolor sit amet", true],
    ["英訳 : Lorem ipsum dolor sit amet", true],
    ["英訳/EN :Lorem ipsum dolor sit amet", true],
    ["EN- Lorem ipsum dolor sit amet", true],
    ["translation- Lorem ipsum dolor sit amet", true],
    ["tr- Lorem ipsum dolor sit amet", true],
    ["英訳- Lorem ipsum dolor sit amet", true],
    ["英訳/EN-Lorem ipsum dolor sit amet", true],
    ["EN - Lorem ipsum dolor sit amet", true],
    ["translation - Lorem ipsum dolor sit amet", true],
    ["tr - Lorem ipsum dolor sit amet", true],
    ["英訳 - Lorem ipsum dolor sit amet", true],
    ["英訳/EN -Lorem ipsum dolor sit amet", true],
    ["EN} Lorem ipsum dolor sit amet", true],
    ["translation} Lorem ipsum dolor sit amet", true],
    ["tr} Lorem ipsum dolor sit amet", true],
    ["英訳} Lorem ipsum dolor sit amet", true],
    ["英訳/EN}Lorem ipsum dolor sit amet", true],
    ["EN } Lorem ipsum dolor sit amet", true],
    ["translation } Lorem ipsum dolor sit amet", true],
    ["tr } Lorem ipsum dolor sit amet", true],
    ["英訳 } Lorem ipsum dolor sit amet", true],
    ["英訳/EN }Lorem ipsum dolor sit amet", true],
    ["/[EN] Lorem ipsum dolor sit amet", true],
    ["/[translation] Lorem ipsum dolor sit amet", true],
    ["/[tr] Lorem ipsum dolor sit amet", true],
    ["/[英訳] Lorem ipsum dolor sit amet", true],
    ["/[英訳/EN]Lorem ipsum dolor sit amet", true],
    ["/EN: Lorem ipsum dolor sit amet", true],
    ["/translation: Lorem ipsum dolor sit amet", true],
    ["/tr: Lorem ipsum dolor sit amet", true],
    ["/英訳: Lorem ipsum dolor sit amet", true],
    ["/英訳/EN:Lorem ipsum dolor sit amet", true],
    ["/EN : Lorem ipsum dolor sit amet", true],
    ["/translation : Lorem ipsum dolor sit amet", true],
    ["/tr : Lorem ipsum dolor sit amet", true],
    ["/英訳 : Lorem ipsum dolor sit amet", true],
    ["/英訳/EN :Lorem ipsum dolor sit amet", true],
    ["/EN- Lorem ipsum dolor sit amet", true],
    ["/translation- Lorem ipsum dolor sit amet", true],
    ["/tr- Lorem ipsum dolor sit amet", true],
    ["/英訳- Lorem ipsum dolor sit amet", true],
    ["/英訳/EN-Lorem ipsum dolor sit amet", true],
    ["/EN - Lorem ipsum dolor sit amet", true],
    ["/translation - Lorem ipsum dolor sit amet", true],
    ["/tr - Lorem ipsum dolor sit amet", true],
    ["/英訳 - Lorem ipsum dolor sit amet", true],
    ["/英訳/EN -Lorem ipsum dolor sit amet", true],
    ["/EN} Lorem ipsum dolor sit amet", true],
    ["/translation} Lorem ipsum dolor sit amet", true],
    ["/tr} Lorem ipsum dolor sit amet", true],
    ["/英訳} Lorem ipsum dolor sit amet", true],
    ["/英訳/EN}Lorem ipsum dolor sit amet", true],
    ["/EN } Lorem ipsum dolor sit amet", true],
    ["/translation } Lorem ipsum dolor sit amet", true],
    ["/tr } Lorem ipsum dolor sit amet", true],
    ["/英訳 } Lorem ipsum dolor sit amet", true],
    ["/英訳/EN }Lorem ipsum dolor sit amet", true],
    ["EN: Lorem ipsum dolor sit amet", true],
    ["translation: Lorem ipsum dolor sit amet", true],
    ["tr Lorem ipsum dolor sit amet", true],
    ["英訳 Lorem ipsum dolor sit amet", true],
    ["英訳/EN Lorem ipsum dolor sit amet", true],
    ["EN  Lorem ipsum dolor sit amet", true],
    ["translation  Lorem ipsum dolor sit amet", true],
    ["tr  Lorem ipsum dolor sit amet", true],
    ["英訳  Lorem ipsum dolor sit amet", true],
    ["英訳/EN Lorem ipsum dolor sit amet", true],
    ["/tr Lorem ipsum dolor sit amet", true],
    ["/英訳 Lorem ipsum dolor sit amet", true],
    ["/英訳/EN Lorem ipsum dolor sit amet", true],
    ["/EN  Lorem ipsum dolor sit amet", true],
    ["/translation  Lorem ipsum dolor sit amet", true],
    ["/tr  Lorem ipsum dolor sit amet", true],
    ["/英訳  Lorem ipsum dolor sit amet", true],
    ["/英訳/EN Lorem ipsum dolor sit amet", true],
    ["true endingとかなんか", false],
    ["encounter an enemy", false],
]

var regexTester = (function () {

    var basePattern = "^\\/?((§)\\s?(:|-|\\})|\\[(§)\\]|(§)\\s)";
    var thingsToMatch = ["英訳", "英訳\/en", "en", "tr", "translation"];
    var pattern = basePattern.replace(/§/g, thingsToMatch.join('|'));

    return {
        isTranslation: function (txt) {
            return RegExp(pattern, 'i').test(txt)
        },
        showPattern: function () {
            return pattern;
        },
    }

}());

(function () {

    var Assert = function (func, str, expected) {
        if (func(str) === expected) {
            return "PASS";
        }
        else {
            return "FAIL: " + str;
        }
    }

    var IsTranslation = function (str, expected) {
        var result = Assert(regexTester.isTranslation, str, expected);
        console.log(result);
    }

    console.log("Pattern: ", regexTester.showPattern());

    testStringsAndExpectedResults.forEach(([testString, expectedOutput]) => IsTranslation(testString, expectedOutput));
})();