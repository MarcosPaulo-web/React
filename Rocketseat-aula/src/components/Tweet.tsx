type TweetProps = {
    text:string;
//    text?:string; para aser opicional
 }

export function Tweet(props:TweetProps){

return(
    <div>
        <p>{props.text}</p>
    </div>
)

}
