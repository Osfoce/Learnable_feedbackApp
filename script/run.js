const main = async () => {

    const helloContractFactory = await hre.ethers.getContractFactory("feedBack");
    const helloContract = await helloContractFactory.deploy();
    await helloContract.deployed();
   
    const test = await feedbackContract.getMessage();
    console.log(message);
   
}
   
   const runMain = async () => {
    try {
        await main();
        process.exit(0);
   } catch (error) {
       console.log(error);
       process.exit(1);
   }

   }
   
   runMain();
   
   
   
   
   const submitted = () => console.log("submitted")
   const clicked = () => console.log("clicked")
   
       const feedbackForm = document.getElementById('feedback-form');
       const feedbackList = document.getElementById('feedback-list');
   
       async function connect() {
       if (typeof window.we3 !== 'undefined') {
           ethereum.request({ method: 'eth_requestAccounts' });
       }
       alert('Download Metamask');
   }
   
   
   
       feedbackForm.addEventListener('submit', function(event) {
           event.preventDefault();
   
           const userInput = document.getElementById('user-input').value.trim();
   
           if (userInput !== '') {
               const feedbackItem = document.createElement('div');
               feedbackItem.classList.add('feedback-item');
               feedbackItem.textContent = userInput;
               feedbackList.appendChild(feedbackItem);
   
               // Clear input after submission
               document.getElementById('user-input').value = '';
           }
       });