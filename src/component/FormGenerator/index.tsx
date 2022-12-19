import React, { useState } from 'react';
import { Button, Form, Input, Radio, InputNumber, DatePicker } from 'antd';
import styled from 'styled-components';

type RequiredMark = boolean | 'optional';
const InputNumberContainer = styled(InputNumber)`
  width:100%;
`;
const DatePickerContainer = styled(DatePicker)`
  width:100%;
`;
export const FormContainer = styled(Form)`
    width:100%;
`
export const ButtonAction =styled(Button)`
    height:53px;
    width:100%;
    font-size:14px;
    font-weight:700;

`;
function FormGenerator(props:any) {
    const {formData, updateFormData}=props;
    const {formComponent}=formData
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const onFinish = (fieldsValue: any) => {
    // Should format date value before submit.
    console.log("fieldsValue==>", fieldsValue);
    const values = {
      ...fieldsValue,
    };
    updateFormData(values)
    console.log('Received values of form: ', values);
  };
    console.log("formData==>", formData);
    console.log("form===>", form);
  return (
    <div>
        <FormContainer
            form={form}
            layout="vertical"
            initialValues={{ requiredMarkValue: requiredMark }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
            onFinish={onFinish}
        >
            {formData?.formComponent?.map((formProps:any, index:number)=>(
                <>
                    {formProps?.inputType== "text" &&
                        (<Form.Item name={formProps?.name} label={formProps?.title} hasFeedback tooltip="This is a required field" rules={[
                            {
                              pattern: new RegExp(formProps?.regex),
                              message: "Format is wrong",
                              required: true
                            },
                          ]}>
                        <Input placeholder="input placeholder"  maxLength={formProps?.maxLength} minLength={formProps?.minLength}/>
                    </Form.Item>)}
                    
                    {formProps?.inputType== "number" &&
                    ( <Form.Item name={[formProps?.title,'']} label={formProps?.title} hasFeedback rules={[{ pattern: new RegExp(formProps?.regex), message: "Format is wrong"}]}>
                        <InputNumberContainer maxLength={15}/>
                    </Form.Item>)}
                    {formProps?.inputType== "email" &&
                    (<> <Form.Item name={formProps?.name} label={formProps?.title} hasFeedback rules={[{ type: 'email', required: true  }]} >
                        <Input />
                    </Form.Item>
                    
                    </>)
                    
                    }
                    {formProps?.inputType== "datePicker" &&
                    ( <Form.Item label={formProps?.title} rules={[{required: true}]} dependencies={formProps?.dependencies}>
                        <DatePickerContainer />
                    </Form.Item>)}
                    {formProps?.inputType=='customized' &&
                    <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.panCard !== currentValues.panCard}
                >
                    {({ getFieldValue }) =>
                    getFieldValue('panCard')?.length===10 && new RegExp(formProps?.regex).test(getFieldValue('panCard')) && (
                        <Form.Item label={formProps?.title} rules={[{ required: true }]}>
                            <DatePickerContainer />
                        </Form.Item>
                    )
                    }
                </Form.Item>
                    }
                </>
                
))}
<Form.Item shouldUpdate>
        {() => (
          <ButtonAction
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Continue
          </ButtonAction>
        )}
      </Form.Item>
    </FormContainer>
    </div>
  );
}

export default FormGenerator;
