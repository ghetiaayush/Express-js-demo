export default function login() {
   return `<form action="/submit" method="post">
			<input type="text" placeholder="name">
			<br/>
			<br/>
			<input type="password" placeholder="Enter Password">
			<br/>
			<br/>
			<button>Login</button>
         <a href='/'>Go to Home</a>
			</form>`
}