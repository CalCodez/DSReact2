import "./css/style_reset.css";
import "./css/header.css";
import {data} from "./assignment_data";
import {ChracterRating} from "./assignment_data";
import {CharacterCard} from "./assignment_data";

const [card1, card2, card3, card4, card5, card6, card7, card8, card9] = data;
const dataRatings = [card2, card3, card6, card1, card5];
const cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9];
function App() {
	return (
		<body>
			<header>
				<h1>Fullmetal Alchemist</h1>
				<nav>
					<li>about us</li>
					<li>info</li>
					<li>support us</li>
				</nav>
			</header>
			{/* Character Rathings Section */}
			<section id='character-ratings'>
				<h4>Top Characters</h4>
				<table>
					<tr>
						<th>Name</th>
						<th>Skillset</th>
						<th>Votes</th>
					</tr>

					{/* Render Character Section  */}
					{dataRatings.map((props, dataIndex) => {
						const adjustedIndex = dataIndex + 0;
						const oddRowDark = adjustedIndex % 2 === 0;
						return (
							<ChracterRating
								props={props}
								key={props.name}
								oddRowDark={oddRowDark}
							/>
						);
					})}
				</table>
			</section>

			{/* Render Character Cards */}
			<section id='character-cards'>
				{cards.map((props, index) => (
					<CharacterCard
						key={index}
						name={props.name}
						nickName={props.nickName}
						imageUrl={props.imageUrl}
						background={props.background}
					/>
				))}
			</section>
		</body>
	);
}

export default App;
