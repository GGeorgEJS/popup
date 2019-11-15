const reviewInput = document.querySelector('input[id=review]');
		const review = document.querySelector('.review');
		const mark = document.querySelector('.mark');
		const option = document.querySelector('.choice');
		const choose = document.querySelectorAll('.choose');
		const square = document.querySelector('.square');
		const choiceWindow = document.querySelector('.choice');
		const textarea = document.querySelector('textarea');
		const button = document.querySelector('button');
		const helpWindow = document.querySelector('.help');
		const thanksWindow = document.querySelector('.thanks');
		let stopTimeout;


		setTimeout(() => {
			review.style.opacity = 1;
		},2000)




		const myClick = () => {
			if(window.innerWidth > 400){
				mark.style.bottom = '5%';
				choiceWindow.style.left = '1%';
			}
		}

		const over = () => {
			stopTimeout = setTimeout(() => {
				helpWindow.style.opacity = 1;
			}, 2000)
		}

		reviewInput.addEventListener('change', (e) => {
			console.log("lol")
			mark.style.opacity= 1;
			if(reviewInput.checked && window.innerWidth < 400){
				mark.style.bottom = '5%';
				choiceWindow.style.left = '1%'

			} else if(reviewInput.checked){ 
				mark.style.bottom = '30%';
				review.style.backgroundColor = '#0094e6';
			} else {
				mark.style.visibility = 'hidden';
				mark.style.bottom = '5%';	
				choiceWindow.style.left = '-33rem';
				choiceWindow.style.top = '54%'
				choiceWindow.style.height = '127px';
				review.style.background = '#00a5ff';

			}
		});

		mark.addEventListener('mouseover', over)

		mark.addEventListener('mouseout', (e) => {
			helpWindow.style.opacity = 0;
			clearTimeout(stopTimeout);
		})

		mark.addEventListener('click', myClick)



		option.addEventListener('mouseover', (e) => {
			if(e.target.classList.contains('choose')){
				choose.forEach((item) => {
						if(!item.classList.contains('checked') && !e.target.classList.contains('checked')){
							item.style.opacity = 0.4;
							if(e.target == item){
								item.style.opacity = 1;
							}
						}
					})
			} else {
				choose.forEach((item) => {
					item.style.opacity = 1
				})
			}
		});

		option.addEventListener('mouseleave', (e) => {
				choose.forEach(item => item.style.opacity = 1)
		});

		option.addEventListener('click', (e) => {
			if(e.target.classList.contains('choose')){
				choiceWindow.style.top = '10%';
				choiceWindow.style.height = '407px';
				button.style.background = '#cbcbcb';
				choose.forEach((item) => {
					item.style.background = '#cbcbcb';
					item.style.opacity = 1;
					item.classList.remove('checked');
					if(e.target == item){
						item.style.background = '#ffc300';
						item.classList.add('checked');
						square.style.left = item.getBoundingClientRect().left + 'px';
					}
				})
			}
			if(e.target.id == 'send' && textarea.value){
				choiceWindow.style.height = '127px';
				choiceWindow.style.top
				choiceWindow.style.left = "-33rem";
				review.style.left = '-33rem';
				setTimeout(() => {
						thanksWindow.style.opacity = 1
				},2000)
				mark.removeEventListener('click', myClick)
				mark.removeEventListener('mouseover', over);
			}
		});

		textarea.addEventListener('input', (e) => {
			if(textarea.value){
				button.style.background = '#ffc300';
			} else{
				button.style.background = '#cbcbcb';
			}
		});