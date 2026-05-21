import { Field, Input, Label } from '@headlessui/react'

function TodoItem() {

  return (
<form>   
    <Field>
      <Label>Input:</Label>
      <Input name="inputfield" />
      <button type="submit" onClick={(e) => e.preventDefault()}>Submit</button>
    </Field>
</form>   
)
}

export default TodoItem