import { Input } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import MainButton from '../Buttons';
export const SettingForm =(props)=> {
return (
    <form>
        lookingForAJob: <Checkbox name='lookingForAJob'/>
lookingForAJobDescription: 
    <Input/>
fullName:
    <Input/>

github:
    <Input/>

facebook:
    <Input/>
instagram: 
    <Input/>
twitter: 
    <Input/>
website: required(string)
youtube: 
    <Input/>
mainLink: 
    <Input/>
 <MainButton type ="submit   " value="Save"/>
</form>

)
}
