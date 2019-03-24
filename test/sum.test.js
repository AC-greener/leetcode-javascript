import { sum, reverse } from '../sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('', ()=> {
  expect(reverse("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
})