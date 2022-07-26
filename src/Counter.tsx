import { generateArray, truthy } from "@dowhileluke/fns"

type CounterProps = {
	value: number,
	base: number,
	title?: string,
}

const toDigit = generateArray(0, 15, n => n.toString(36))
const toDecimal = toDigit.reduce((dict, digit, i) => {
	dict[digit] = i

	return dict
}, {} as Record<string, number>)

function toEightDigits(value: number, base: number) {
	return value.toString(base).padStart(8, '0').slice(-8).split('').map(c => toDecimal[c])
}

export function Counter({ value, base, title }: CounterProps) {
	const digits = toEightDigits(value, base)

	return (
		<div className="counter">
			<h3>{title || `Base ${base}`}</h3>
			<div className="counter-digits">
				{digits.map((d, dIndex) => (
					<div className="counter-col" key={dIndex}>
						{generateArray(base - 1, n => d >= base - 1 - n).map((isFilled, i) => (
							<div className={truthy(isFilled && 'filled', 'box').join(' ')} key={i} />
						))}
						<div className="col-label">
							{toDigit[d]}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
