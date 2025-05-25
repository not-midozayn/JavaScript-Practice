# JavaScript Regex Cheat Sheet for Senior Engineers

## Basic Components

### Literal Characters
Characters that match themselves exactly.

**Example 1: Simple Text Match**
```javascript
/cat/
```
**Translation:** Match the exact sequence "cat"
**Reasoning:** Direct character matching - finds "cat" anywhere in the string
**Test Cases:**
- `"I have a cat"` ✅ **Match** - Contains "cat" as substring
- `"I have a dog"` ❌ **No Match** - Does not contain "cat"

### Anchors

#### `^` - Start of String
**Example 2: Start Anchor**
```javascript
/^Hello/
```
**Translation:** Match "Hello" only at the beginning of the string
**Reasoning:** `^` asserts position at start of string
**Test Cases:**
- `"Hello world"` ✅ **Match** - "Hello" is at the start
- `"Say Hello"` ❌ **No Match** - "Hello" is not at the start

#### `$` - End of String
**Example 3: End Anchor**
```javascript
/world$/
```
**Translation:** Match "world" only at the end of the string
**Reasoning:** `$` asserts position at end of string
**Test Cases:**
- `"Hello world"` ✅ **Match** - "world" is at the end
- `"world peace"` ❌ **No Match** - "world" is not at the end

### Character Classes

#### `[...]` - Character Set
**Example 4: Vowel Matching**
```javascript
/b[aeiou]t/
```
**Translation:** Match "b" followed by any vowel, followed by "t"
**Reasoning:** `[aeiou]` matches exactly one character from the set
**Test Cases:**
- `"bat"` ✅ **Match** - "a" is in the vowel set
- `"but"` ✅ **Match** - "u" is in the vowel set
- `"bxt"` ❌ **No Match** - "x" is not a vowel

#### `[^...]` - Negated Character Set
**Example 5: Non-Digit After Letter**
```javascript
/a[^0-9]b/
```
**Translation:** Match "a" followed by any non-digit, followed by "b"
**Reasoning:** `[^0-9]` matches any character except digits 0-9
**Test Cases:**
- `"axb"` ✅ **Match** - "x" is not a digit
- `"a5b"` ❌ **No Match** - "5" is a digit

### Predefined Character Classes

#### `\d` - Digits
**Example 6: Basic Digit Match**
```javascript
/\d{3}/
```
**Translation:** Match exactly 3 consecutive digits
**Reasoning:** `\d` matches [0-9], `{3}` specifies exact count
**Test Cases:**
- `"ID: 123"` ✅ **Match** - Contains "123" (3 digits)
- `"ID: 12"` ❌ **No Match** - Only 2 digits, need exactly 3

#### `\w` - Word Characters
**Example 7: Word Character Match**
```javascript
/\w{5}/
```
**Translation:** Match exactly 5 consecutive word characters
**Reasoning:** `\w` matches [a-zA-Z0-9_], useful for identifiers
**Test Cases:**
- `"user_123"` ✅ **Match** - "user_" is 5 word characters
- `"hi-there"` ❌ **No Match** - Contains hyphen (not a word character)

#### `\s` - Whitespace
**Example 8: Word Separator**
```javascript
/\w+\s\w+/
```
**Translation:** Match one or more word characters, whitespace, then one or more word characters
**Reasoning:** `\w+` matches word sequences, `\s` matches space/tab/newline
**Test Cases:**
- `"hello world"` ✅ **Match** - Two words separated by space
- `"helloworld"` ❌ **No Match** - No whitespace separator

### Quantifiers

#### `*` - Zero or More
**Example 9: Optional Repeated Character**
```javascript
/bo*k/
```
**Translation:** Match "b" followed by zero or more "o"s, followed by "k"
**Reasoning:** `*` allows the preceding element to appear 0 or more times
**Test Cases:**
- `"bk"` ✅ **Match** - Zero "o"s is valid
- `"book"` ✅ **Match** - Two "o"s is valid
- `"bak"` ❌ **No Match** - "a" is not "o"

#### `+` - One or More
**Example 10: Required Repeated Character**
```javascript
/go+d/
```
**Translation:** Match "g" followed by one or more "o"s, followed by "d"
**Reasoning:** `+` requires at least one occurrence of the preceding element
**Test Cases:**
- `"good"` ✅ **Match** - Two "o"s (≥1)
- `"god"` ✅ **Match** - One "o" (≥1)
- `"gd"` ❌ **No Match** - Zero "o"s (needs ≥1)

#### `?` - Zero or One (Optional)
**Example 11: Optional Character**
```javascript
/colou?r/
```
**Translation:** Match "colo" followed by optional "u", followed by "r"
**Reasoning:** `?` makes the preceding element optional (0 or 1 occurrence)
**Test Cases:**
- `"color"` ✅ **Match** - No "u" (0 occurrences)
- `"colour"` ✅ **Match** - One "u" (1 occurrence)
- `"colouur"` ❌ **No Match** - Two "u"s (more than 1)

#### `{n}` - Exact Count
**Example 12: Phone Number Pattern**
```javascript
/\d{3}-\d{3}-\d{4}/
```
**Translation:** Match 3 digits, hyphen, 3 digits, hyphen, 4 digits
**Reasoning:** `{n}` specifies exact repetition count
**Test Cases:**
- `"123-456-7890"` ✅ **Match** - Exact format with correct digit counts
- `"123-45-7890"` ❌ **No Match** - Middle section has 2 digits instead of 3

#### `{n,m}` - Range Count
**Example 13: Password Length**
```javascript
/^\w{8,12}$/
```
**Translation:** Match string containing only 8-12 word characters
**Reasoning:** `{8,12}` allows 8 to 12 repetitions, anchors ensure entire string matches
**Test Cases:**
- `"password123"` ✅ **Match** - 11 characters, within range
- `"pass"` ❌ **No Match** - 4 characters, below minimum of 8

### Groups and Alternation

#### `(...)` - Capturing Groups
**Example 14: Date Extraction**
```javascript
/(\d{4})-(\d{2})-(\d{2})/
```
**Translation:** Match and capture year, month, and day separately
**Reasoning:** Parentheses create groups that can be extracted via match results
**Test Cases:**
- `"2023-12-25"` ✅ **Match** - Groups: ["2023", "12", "25"]
- `"23-12-25"` ❌ **No Match** - Year needs 4 digits, not 2

#### `|` - Alternation (OR)
**Example 15: File Extension Check**
```javascript
/\.(jpg|png|gif)$/
```
**Translation:** Match dot followed by "jpg", "png", or "gif" at string end
**Reasoning:** `|` provides alternatives, parentheses group the options
**Test Cases:**
- `"image.jpg"` ✅ **Match** - Ends with ".jpg"
- `"image.bmp"` ❌ **No Match** - ".bmp" not in allowed extensions

### Advanced Character Classes

#### `\b` - Word Boundary
**Example 16: Whole Word Match**
```javascript
/\bcat\b/
```
**Translation:** Match "cat" as a complete word, not as part of another word
**Reasoning:** `\b` asserts position at word boundary (between \w and \W)
**Test Cases:**
- `"I have a cat here"` ✅ **Match** - "cat" is a separate word
- `"I have a caterpillar"` ❌ **No Match** - "cat" is part of "caterpillar"

#### Case-Insensitive Matching
**Example 17: Case-Insensitive Email**
```javascript
/^[a-z]+@[a-z]+\.[a-z]+$/i
```
**Translation:** Match email format ignoring case
**Reasoning:** `i` flag makes entire pattern case-insensitive
**Test Cases:**
- `"John@Gmail.Com"` ✅ **Match** - Case ignored due to `i` flag
- `"john@gmail"` ❌ **No Match** - Missing domain extension (no dot + extension)

### Lookahead and Lookbehind

#### `(?=...)` - Positive Lookahead
**Example 18: Password Validation**
```javascript
/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
```
**Translation:** Match strings that contain at least one digit, lowercase, uppercase, and are 8+ characters
**Reasoning:** Lookaheads check conditions without consuming characters
**Test Cases:**
- `"Password1"` ✅ **Match** - Has digit, lowercase, uppercase, 8+ chars
- `"password1"` ❌ **No Match** - Missing uppercase letter

#### `(?!...)` - Negative Lookahead
**Example 19: Exclude Specific Pattern**
```javascript
/^(?!.*admin)\w+$/
```
**Translation:** Match word characters but reject if contains "admin"
**Reasoning:** Negative lookahead ensures "admin" doesn't appear anywhere
**Test Cases:**
- `"user123"` ✅ **Match** - No "admin" substring
- `"administrator"` ❌ **No Match** - Contains "admin"

### Complex Real-World Patterns

#### Email Validation (Simplified)
**Example 20: Email Pattern**
```javascript
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
```
**Translation:** Match valid email format with local part, @, domain, and TLD
**Reasoning:** Combines character classes, quantifiers, and anchors for complete validation
**Test Cases:**
- `"user.name+tag@example.com"` ✅ **Match** - Valid email format
- `"invalid.email"` ❌ **No Match** - Missing @ and domain

#### URL Validation
**Example 21: HTTP/HTTPS URL**
```javascript
/^https?:\/\/[\w.-]+\.[a-zA-Z]{2,}(\/[\w.-]*)*\/?$/
```
**Translation:** Match HTTP/HTTPS URLs with domain and optional path
**Reasoning:** `?` makes 's' optional, `\/` escapes forward slash, `*` allows multiple path segments
**Test Cases:**
- `"https://www.example.com/path"` ✅ **Match** - Valid HTTPS URL with path
- `"ftp://example.com"` ❌ **No Match** - Protocol must be HTTP or HTTPS

#### Phone Number (US Format)
**Example 22: Flexible Phone Format**
```javascript
/^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/
```
**Translation:** Match US phone numbers with optional parentheses and various separators
**Reasoning:** `\(?` makes opening paren optional, `[-.\s]?` allows different separators
**Test Cases:**
- `"(555) 123-4567"` ✅ **Match** - Parentheses and space/dash format
- `"555.123.4567"` ✅ **Match** - Dot separator format
- `"55512345678"` ❌ **No Match** - Too many digits (11 instead of 10)

#### Credit Card Number
**Example 23: Credit Card Pattern**
```javascript
/^(\d{4}[-\s]?){3}\d{4}$/
```
**Translation:** Match 16-digit credit card with optional spaces or dashes every 4 digits
**Reasoning:** `{3}` repeats the 4-digit + separator pattern, final `\d{4}` for last group
**Test Cases:**
- `"1234-5678-9012-3456"` ✅ **Match** - Standard format with dashes
- `"1234 5678 9012 345"` ❌ **No Match** - Last group has only 3 digits

#### IPv4 Address
**Example 24: IP Address Validation**
```javascript
/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
```
**Translation:** Match valid IPv4 addresses (0-255 for each octet)
**Reasoning:** Complex pattern ensuring each octet is 0-255, repeated 4 times with dots
**Test Cases:**
- `"192.168.1.1"` ✅ **Match** - Valid IP with all octets ≤ 255
- `"256.1.1.1"` ❌ **No Match** - First octet exceeds 255

#### Strong Password
**Example 25: Complex Password Requirements**
```javascript
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
```
**Translation:** Match passwords with lowercase, uppercase, digit, special char, 8+ length
**Reasoning:** Multiple positive lookaheads ensure all requirements met before checking length
**Test Cases:**
- `"MyP@ssw0rd"` ✅ **Match** - Contains all required character types
- `"MyPassword"` ❌ **No Match** - Missing digit and special character

## Quick Reference

### Character Classes
- `\d` = `[0-9]` (digits)
- `\D` = `[^0-9]` (non-digits)
- `\w` = `[a-zA-Z0-9_]` (word characters)
- `\W` = `[^a-zA-Z0-9_]` (non-word characters)
- `\s` = `[\t\n\r\f\v ]` (whitespace)
- `\S` = `[^\t\n\r\f\v ]` (non-whitespace)

### Quantifiers
- `*` = 0 or more
- `+` = 1 or more
- `?` = 0 or 1
- `{n}` = exactly n
- `{n,}` = n or more
- `{n,m}` = between n and m

### Anchors
- `^` = start of string
- `$` = end of string
- `\b` = word boundary
- `\B` = non-word boundary

### Character Sets
- `[abc]` = match any character a, b, or c
- `[^abc]` = match any character except a, b, or c
- `[a-z]` = match any lowercase letter
- `[A-Z]` = match any uppercase letter
- `[0-9]` = match any digit
- `[a-zA-Z0-9]` = match any alphanumeric character

### **Groups (Extract or Group Patterns)**
- `(pattern)` = capturing group (extract matched text)
- `(?:pattern)` = non-capturing group (group without extraction)
- `(pattern1|pattern2)` = alternation within group
- `(?<name>pattern)` = named capturing group
- `(?=pattern)` = positive lookahead
- `(?!pattern)` = negative lookahead
- `(?<=pattern)` = positive lookbehind
- `(?<!pattern)` = negative lookbehind

### Flags
- `i` = case insensitive
- `g` = global (find all matches)
- `m` = multiline (^ and $ match line breaks)
- `s` = dotall (. matches newlines)

### JavaScript Usage
```javascript
// Creating regex
const regex1 = /pattern/flags;
const regex2 = new RegExp('pattern', 'flags');

// Testing
regex.test(string);          // returns boolean
string.match(regex);         // returns match array or null
string.replace(regex, replacement);
string.split(regex);
```