

const SignIn = (props) => {
    return(
        <div>
            <form onSubmit={props.signInHandler} >
            <input id='name' onChange={props.nameChange} onBlur={props.nameBlur} value={props.nameValue} />
            <input id='code' onChange={props.codeChange} onBlur={props.codeBlur} value={props.codeValue} />
            <input type='submit' value='Sign In' />
            </form>
        </div>
    )
}

export default SignIn