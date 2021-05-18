import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('shortenText should not change string < 100 characters',() => {
    expect(shortenText(shortText)).toHaveLength(29);
})

test('ShortenText changes extra characters to ...',() => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})
test('returns array with word count',() => {
    expect(wordCount(posts)).toBe(233)
})

test('should correctly attach users name to post',() => {
    const newPosts = attachUserName(users,posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('removes posts without matching user',() => {
    const newPosts = attachUserName(users,posts)
    const deletePost = posts[5]
    expect(newPosts).not.toContainEqual(deletePost)
})
