
const text = document.querySelector('.quote');
const auth = document.querySelector('.author');
const button = document.querySelector('.twitter-share-button');
const nextBtn = document.querySelector('.next');
// const loader = document.querySelector('.loader');
$(document).ready(function() {
	
	$("#btn").on("click", function(){
		
		$.ajax({
			url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
			type: "GET",
			data: {
				cat: "famous",
				count: "1",
			},
			// dataType: 'json',
			// success: function(quotes) {
			// 	$(".insert-quote").html(quotes.quote);
			// 	$(".insert-author").html("- " + quotes.author);
			// 	$("#tweet").attr("href", "https://twitter.com/intent/tweet?text="+quotes.quote+" -"+quotes.author);
			// 	$("#quote-box").attr("style", "background-color: #8F"+(Math.floor(Math.random() * (99 - 10 + 1) + 10))+(Math.floor(Math.random() * (99 - 10 + 1) + 10))+";");
			// 	// if (quotes.quote.length > 100) {
			// 	// 	$(".insert-quote").attr("style", "font-size: 2.5em");
			// 	// } else if (quotes.quote.length > 160) {
			// 	// 	$(".insert-quote").attr("style", "font-size: 2em");
			// 	// } else if (quotes.quote.length < 100) {
			// 	// 	$(".insert-quote").attr("style", "font-size: 3em");
			// 	// }
			// },
			beforeSend: function(xhr) {
		   xhr.setRequestHeader("X-Mashape-Authorization", "tLoCsKtopemshNeZYqkzFIYU45dvp1WHQRrjsnmBOsG4EMUvoE");
		  }
		});
	});

	$("#btn").on("click", function(){
		$(".refresh").toggleClass("rotate");
	});

});
const getQuote = async () => {
    
    // loader.classList.remove('hide');
    const res = await fetch(`https://type.fit/api/quotes`);
    const quotes = await res.json();
    // loader.classList.add('hide');
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const quote = item.text;
    const author = item.author;
    text.innerText = quote;
    auth.innerText = author;
    button.href = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
}

nextBtn.addEventListener('click', getQuote);

getQuote();