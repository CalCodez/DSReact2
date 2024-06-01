//import "./css/character-cards.css";
import "./css/style_reset.css";
import "./css/header.css";
import "./css/character-ratings.css";
import {CharacterCard} from "./fma-data";

function App() {
	return (
		<>
			<body>
				<header>
					<h1>Fullmetal Alchemist</h1>
					<nav>
						<li>about us</li>
						<li>info</li>
						<li>support us</li>
					</nav>
				</header>

				<section id='character-cards'>
					{/*<div class='card'>
						<div class='card-titles'>
							<h3>Alex Louis Armstrong</h3>
							<h4>Major Armstrong</h4>
						</div>
						<img
							src='https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg'
							alt=''
						/>
						<p>
							Major Armstrong may look big and strong, but deep down he's the
							biggest sap in the entire show
						</p>
					</div>*/}
					<CharacterCard />
					<CharacterCard />
					<CharacterCard />
					<CharacterCard />
					<CharacterCard />
					<CharacterCard />
				</section>
			</body>
		</>
	);
}

export default App;
