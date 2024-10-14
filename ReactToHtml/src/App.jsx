import './css/style_reset.css';
//import './css/header.css';
//import { data } from './assignment_data';
//import { CharcterRating } from './assignment_data';
//import { CharacterCard } from './assignment_data';

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
