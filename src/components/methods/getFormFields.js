//Material
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


export default function getFormFields(myfields, handleChange) {
  const result = [];
  var fields = myfields;
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].type == "dropdown") {
      const options = [];
      options.push(<option key='-1' aria-label="None" value="" />);
      if (fields[i].options !== undefined) {
        for (var j = 0; j < fields[i].options.length; j++) {
          options.push(
            <option key={j} value={fields[i].options[j].value}>{fields[i].options[j].name}</option>
          );
        }
      }
      const select =
        <Select
           native
           value={options[1].value}
           key={fields[i].name}
           name={fields[i].name}
           onChange={handleChange}>
           {options}
         </Select>
         ;
      result.push(select);
    } else {
      result.push(
        <TextField
          key={fields[i].name}
          name={fields[i].name}
          label={fields[i].hint}
          type={fields[i].type}
          onChange={handleChange}
          variant='outlined'
          margin="normal"
          color="primary"
          id={fields[i].name}
          required
          fullWidth
        />
      );
    }
  }
  return result;
}
