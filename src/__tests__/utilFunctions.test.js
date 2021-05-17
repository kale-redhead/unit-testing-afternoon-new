import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test(() => {
    expect(shortenText(shortText)).toHaveLength(29);
})

test(() => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.lemgth)
    expect(shortened.slice(-3)).toBe('...')
})
test(() => {
    expect(wordCount(posts)).toBe(233)
})

test(() => {
    const newPosts = attachUserName(users,posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test(() => {
    const newPosts = attachUserName(users,posts)
    const deletePost = posts[5]
    experect(newPosts).not.toContainEqual(deletedPost)
})
