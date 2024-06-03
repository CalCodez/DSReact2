//import "./css/character-cards.css";
import "./css/style_reset.css";
import "./css/header.css";
import "./css/character-ratings.css";
import {data} from "./fma-data";
import {CharacterCard} from "./fma-data";

const [card1, card2, card3, card4, card5, card6, card7, card8, card9] = data;
const cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9];
function App() {
	return (
		<div>
			<header>
				<h1>Fullmetal Alchemist</h1>
				<nav>
					<li>about us</li>
					<li>info</li>
					<li>support us</li>
				</nav>
			</header>

			<section id='character-cards'>
				{cards.map((card, index) => (
					<CharacterCard
						key={index}
						name={card.name}
						nickName={card.nickName}
						img={card.imageUrl}
						background={card.background}
					/>
				))}
			</section>
		</div>
	);
}

export default App;
