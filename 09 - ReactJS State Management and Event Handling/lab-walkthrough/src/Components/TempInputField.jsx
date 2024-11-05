export default function TempInputField(props){
  return(
      <>
          <legend>Temperature Converter</legend>
          <input type="number" onChange={e => props.func(e.target.value)} value={props.value}/> {props.unitofmeasure}
      </>
  );
}