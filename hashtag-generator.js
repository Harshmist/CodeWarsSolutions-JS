/*Description:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.*/

unction generateHashtag (str) {
// Removing whitespace and capitalising first letter of every word
  let hashTag = str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ').replace(/\s+/g, "");
  
if (hashTag.length > 0 && hashTag.length < 140){
  return '#' + hashTag;
 } else {
   return false;
 }
}
