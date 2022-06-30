export const randomLesbianColor = (): number => {
	const colors = [
		0xd52d00, 0xef7627, 0xff9a56, 0xffffff, 0xd162a4, 0xb55690, 0xa30262,
	]
	return colors[Math.floor(Math.random() * 6)]
}
