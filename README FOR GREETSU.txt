Since the API link was not available to me, I couldn't complete the Notify section mentioned in the assignment.

If I did have the API link, I would create a loding component, use axios to post the email/to check the database if
the user is already in the notify list, use a boolean state to display the loading and then lastly the tick.
something like this:

const handleNotify = ()=>{try{
    setLoading(true);
    await axios.post('/api/v1/user-details', input);
    setLoading(False);
    setButtonText("✓")
}catch(err){
    console.log(err)
    setError(true);
}}

return(
    <>
    <div>
    <button>
    {loading && <Loading/>}
    {buttonText}
    </button>
    {
        Error && <p style={{color: "red"}}>Invalid Email</p>
    }
    </div>
    </>
)

Apart from this, I have tried bring the exact desing as mentioned in the as in the assignment.
The dark mode is still remaining, Since I'm submitting the assignment now because of the deadline, I'll try to complete the dark mode 
and update the repo after submitting. I'll also update this readme once the dark mode is complete. 