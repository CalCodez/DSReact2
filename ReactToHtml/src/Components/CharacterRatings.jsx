//** Character Ratings Functional Component */

import '../css/character-ratings.css';
import { data as characterData } from '../assignment_data';

const CharacterRating = () => {
	return (
		<section id='character-ratings'>
			<h4>Top Characters</h4>
			<table>
				<th>Name</th>
				<th>Skillset</th>
				<th>Votes</th>
				{characterData.map((character, index) => {
					const oddRowDark = index % 2 === 0;
					return (
						<tr
							className={`dataRatings ${oddRowDark ? 'dark' : 'light'}`}
							key={character.name}>
							<td>
								{character.name}, {character.nickName}
							</td>
							<td>{character.skillset}</td>
							<td>{character.votes}</td>
						</tr>
					);
				})}
			</table>
		</section>
	);
};

export { CharacterRating };
