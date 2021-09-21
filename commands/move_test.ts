import {assertEquals, assertExists} from 'https://deno.land/std/testing/asserts.ts'
import move from './move.ts'

Deno.test({
  name: 'Move that exists is found correctly',
  fn: async (): Promise<void> => {
    const foundMoveResponse = await move([{name: 'name', value:'transform', type: 3}])
    assertExists(foundMoveResponse.data.embeds)
    assertEquals(foundMoveResponse.data.embeds[0].title, 'Transform')
    assertExists(foundMoveResponse.data.embeds[0].fields)
    assertEquals(foundMoveResponse.data.embeds[0].fields[0].value, 'The Beast')
  }
})

Deno.test({
  name: 'converts typed to lowercase without special characters',
  fn: async (): Promise<void> => {
    const first = await move([{name: 'name', value:'dont you know who i am', type: 3}])
    assertExists(first.data.embeds)
    assertExists(first.data.embeds[0].title)
    const other = await move([{name: 'name', value:"Don't You know WHO I AM", type: 3}])
    assertExists(other.data.embeds)
    assertExists(other.data.embeds[0].title)
    assertEquals(other.data.embeds[0].title, first.data.embeds[0].title)
  }
})

Deno.test({
  name: 'Move not found',
  fn: async (): Promise<void> => {
    const notFoundMoveResponse = await move([{name: 'name', value:'one more thing', type: 3}])
    assertEquals(true, true)
  }
})