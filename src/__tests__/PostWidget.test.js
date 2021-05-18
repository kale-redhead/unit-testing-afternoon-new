import React from 'react'
import {render} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import PostWidget from '../components/PostWidget'
import {shortenText} from '../utils/functions'
import {posts} from './__data__/testData'

const longPost = posts[0]
const post = posts[1]

it('renders out post',() => {
    const { container } = render(
        <MemoryRouter>
            <PostWidget {...post}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(post.text)
})

it('shortens display text when expanded is false',() => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...longPost}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(shortenText(longPost.text))
})

it('shows all textwhen expanded is true', () => {
    const { container } = render(
        <MemoryRouter>
            <PostWidget expanded={true}{...longPost}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(longPost.text)
})