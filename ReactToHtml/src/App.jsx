import './css/style_reset.css';
import { Header } from './Components/Header';
import { CharacterRating } from './Components/CharacterRatings';
import { CharacterCard } from './Components/CharacterCards';

function App() {
	return (
		<>
			<Header />
			<CharacterRating />
			<CharacterCard />
		</>
	);
}

export default App;
