import React from "react"
import { faSearch, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookCard from "./modals/bookCard";
import {Route} from 'react-router-dom'
import './bookSearch.css'
import BooksView from "./booksview";
import Loader from "./modals/loader.gif"

class BookSearch extends React.Component{
  
	constructor( props ) {
		super( props );

		this.state = {
			query: '',
			results: {},
			loading: false,
			message: '',
			totalResults: 0,
		};

		this.cancel = '';
	}


	/**
	 *
	 * @param {int} updatedPageNo Updated Page No.
	 * @param {String} query Search Query.
	 *
	 */
	fetchSearchResults = ( query ) => {
		const searchUrl = `http://localhost:3000/booksearch/?${query}`;

		if( this.cancel ) {
			this.cancel.cancel();
		}

		this.cancel = axios.CancelToken.source();

		axios.get( searchUrl, {
			cancelToken: this.cancel.token
		} )
			.then( res => {
				const total = res.data.total;
				const resultNotFoundMsg = ! res.data.hits.length
										? 'There are no more search results. Please try a new search'
										: '';
				this.setState( {
					results: res.data.hits,
					message: resultNotFoundMsg,
					totalResults: total,
					loading: false
				} )
			} )
			.catch( error => {
				if ( axios.isCancel(error) || error ) {
					this.setState({
						loading: false,
						message: 'Failed to fetch the data. Please check network'
					})
				}
			} )
	};

	handleOnInputChange = ( event ) => {
		const query = event.target.value;
		if ( ! query ) {
			this.setState( { query, results: {}, message: '', totalPages: 0, totalResults: 0 } );
		} else {
			this.setState( { query, loading: true, message: '' }, () => {
				this.fetchSearchResults( 1, query );
			} );
		}
	};

	renderSearchResults = () => {
		const { results } = this.state;

		if ( Object.keys( results ).length && results.length ) {
			return (
				<div className="results-container">
					{ results.map( result => {
						return (
							<Route  key={ result.id } exact path="/bookstore/:id" component={BooksView}>
							  <div className="result-item">
								<BookCard result={result} />
							  </div>
							</Route>
						)
					 } 
					) }
				</div>
			)
		}
	};

	render() {
		const { query, loading, message} = this.state;
       return(
           <div className="moveRt">
               <div className="pgTitle">
                  <h1 className="tle">BookStore</h1>
                  <div className="srch">
                   <input className="srchin" type="text"
					name="query"
					value={ query }
					id="search-input"
                    onChange={this.handleOnInputChange} 
                    placeholder="Search books.." type="text" />
                   <span><FontAwesomeIcon icon={faSearch} /></span>
                  </div>
               </div>
            <div className="fixDes">
                <div className="proCard">
                    <div><img className="pPic" src="" alt="error fetching profileImg" /></div>
                    <h2 className="usr">Shivam Modi</h2>
                </div>
                <div className="proIcn">
                    <span><FontAwesomeIcon icon={faUser}/>  Profile</span>
                </div>
                <div className="proOut">
                    <span><FontAwesomeIcon icon={faSignOutAlt}/>  SignOut</span>
                </div>
            </div>    
            <img src={ Loader } className={`search-loading ${ loading ? 'show' : 'hide' }`} alt="loader"/>        
            { this.renderSearchResults() }
           </div>
       )
    }
}