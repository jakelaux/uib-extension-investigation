/* Default imports for UI Builder Components */
import {createCustomElement}  from '@servicenow/ui-core';
import snabbdom               from '@servicenow/ui-renderer-snabbdom';
import styles                 from './styles.scss';
import { UserGreeting } 	  from './components/UserGreeting';
import { LoadingIcon } 		  from './components/LoadingIcon/LoadingIcon';
import actionHandlers         from './actionHandlers';

const view = (state, { updateState, dispatch }) => {
	const { loading, user, method } = state;
	const { title } = state.properties;
	
	if (user === null){
		return <LoadingIcon style={{ transform: 'scale(.5)', backgroundColor: 'white' }}/>;
	}
	return (
		<div>
			{ loading 	?
							<LoadingIcon style={{transform: 'scale(.5)', backgroundColor: backgroundColor}}/>
						:
							<div>
								<h1>{ title }</h1>
								<UserGreeting state={state} />
							</div>
			}
		{/* JSX Switch Statement using Object Literal example */
			{
				"GET": 		<h3 className='options-example'>Render OPTION1</h3>,
				"OPTION2": 	<h3 className='options-example'>Render OPTION2</h3>
			}[method]
		}
		{/* 
			https://picocss.com/ >> PicoCSS documentation 
			Pico Examples below
		*/}
		<nav>
			<ul>
				<li><strong>Brand</strong></li>
			</ul>
			<ul>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#" role="button">Button</a></li>
			</ul>
		</nav>
		<nav aria-label="breadcrumb">
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Category</a></li>
				<li>Page</li>
			</ul>
		</nav>
		<article>
			<main class="container">
				<form>
					<div class="grid">
						<label for="firstname">First name
							<input type="text" id="firstname" name="firstname" placeholder="First name" required />
						</label>
						<label for="lastname">Last name
							<input type="text" id="lastname" name="lastname" placeholder="Last name" required />
						</label>
					</div>
					<label for="email">Email address</label>
					<input type="email" id="email" name="email" placeholder="Email address" required />
					<small>We'll never share your email with anyone else.</small>
					<button type="submit">Submit</button>
				</form>

				<input type="text" placeholder="Valid" aria-invalid="false" />
				<input type="text" placeholder="Invalid" aria-invalid="true" />
				<input type="text" placeholder="Disabled" disabled />
				<input type="text" value="Readonly" readonly></input>

				<table>
					<thead>
						<tr>
						<th scope="col">#</th>
						<th scope="col">Heading</th>
						<th scope="col">Heading</th>
						<th scope="col">Heading</th>
						<th scope="col">Heading</th>
						<th scope="col">Heading</th>
						</tr>
					</thead>
					<tbody>
						<tr>
						<th scope="row">1</th>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						</tr>
						<tr>
						<th scope="row">1</th>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						</tr>
						<tr>
						<th scope="row">1</th>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
						<th scope="col">#</th>
						<td scope="col">Total</td>
						<td scope="col">Total</td>
						<td scope="col">Total</td>
						<td scope="col">Total</td>
						<td scope="col">Total</td>
						</tr>
					</tfoot>
				</table>
				</main>
			</article>
		</div>
	);
};

createCustomElement('x-71146-extension-investigation', {
	renderer: {type: snabbdom},
	/* State variables loading, method, selectedTable, query, and user are included 
	to help with setting up GET / POST but may not be required for your project */
	initialState: {
		loading:			  true,
		method:         	  'GET',
		selectedTable: 	  	  '',
		query:          	  '',
		user:           	  null,
	},
	properties: {
		title:	{ default: "Template Component" },
	},
	view,
	styles,
	actionHandlers
});