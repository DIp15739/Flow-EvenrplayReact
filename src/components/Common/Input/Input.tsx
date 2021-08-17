import {Form} from 'react-bootstrap';

export interface Props{
    label?: any,
    type?: any,
    placeholder?: any,
    onChange?: any,
    value?: any,
}

const Input = ({
    label,
    type,
    placeholder,
    onChange,
    value,
}: Props) =>{
    return(
        <>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>{label}</Form.Label>
                <Form.Control 
                    type={type || "text"}
                    placeholder={placeholder} 
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </Form.Group>
        </>
    );
}

export default Input;