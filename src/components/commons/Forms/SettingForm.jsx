import { Input } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import MainButton from '../Buttons';
export const SettingForm = (props) => {
  return (
    <form>
      lookingForAJob: <Checkbox name='lookingForAJob' />
      <div>
        lookingForAJobDescription:
        <Input />
      </div>
      <div>
        fullName:
        <Input />
      </div>
      <div>github:
        <Input />
      </div>
      <div>
        facebook:
        <Input />
      </div>
      <div>
        instagram:
        <Input />
      </div>

      <div>twitter:
        <Input /></div>
      <div>website: <Input /></div>
      <div>youtube:
        <Input /></div>
      <div>mainLink:
        <Input /></div>



      <MainButton type="submit   " value="Save" />
    </form>

  )
}
