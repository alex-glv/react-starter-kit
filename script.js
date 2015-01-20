var Photo = React.createClass({

    toggleLiked: function() {
	this.setState({
	    liked: !this.state.liked
	})
    },
    
    getInitialState: function() {
	return {
	    liked: false
	}
    },
    
    render: function() {
	var buttonClass = this.state.liked ? 'active': '';
	
	return (
		<div className='photo'>
		<img src={this.props.src} />
		<div className='bar'>
		<button onClick={this.toggleLiked} className={buttonClass}>
		♥
                </button>
		<span>{this.props.caption}</span>
		</div>
		</div>
	)
    }
});

var Gallery = React.createClass({
    getServerData: function () {
	return [
	    {caption: "New York", imageURL: "http://tinyurl.com/lkevsb9"},
	    {caption: "Amsterdam", imageURL: "http://tinyurl.com/myvxkn5"}
	]
	
    },
    render: function () {
	var data = this.getServerData();
	var photos = data.map(function (photo) {
	    return <Photo src={photo.imageURL} caption={photo.caption} />
	});
	
	return (
	    <div className='photo-gallery'>
	    {photos}
	    </div>
	)
    }
});


React.render(
	<Gallery />
	, document.body);
