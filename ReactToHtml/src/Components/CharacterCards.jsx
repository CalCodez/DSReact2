//``Character Card Class Component
import '../css/character-cards.css';
import { data as characterData } from '../assignment_data';
import { Component } from 'react';

export class CharacterCard extends Component {
	render() {
		return (
			<section id='character-cards'>
				{characterData.map((card, index) => (
					<div className='card' key={card.id || index}>
						<div className='card-titles'>
							<h3>{card.name}</h3>
							<h4>{card.nickName}</h4>
						</div>
						<img src={card.imageUrl} alt={card.name} />
						<p>{card.background}</p>
					</div>
				))}
			</section>
		);
	}
}
