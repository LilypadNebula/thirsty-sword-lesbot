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