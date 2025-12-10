import { useDispatch } from "react-redux"

import { usePutProfileMutation } from "../../features/api"
import { toggleEditMode, updateUserData } from "../../features/user/userSlice"

import Button from "../../components/Button"
import FormField from "../../components/FormField"

import "./style.scss"

export default function EditForm({ token, user }) {
    const [putProfile] = usePutProfileMutation()
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
    
        const newUserName = event.target.username.value
    
        try {
            await putProfile({ token, updatedData: { userName: newUserName} })

            dispatch(updateUserData({ userName: newUserName }))
            dispatch(toggleEditMode())
        } catch (error) {
            console.error("Failed to update username", error)
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <FormField
                type="text"
                id="username"
                value={user?.userName}
                modifier="inline"
            >
                User name:
            </FormField>
            <FormField
                type="text"
                id="firstname"
                value={user?.firstName}
                modifier="inline"
                disabled
            >
                First name:
            </FormField>
            <FormField
                type="text"
                id="lastname"
                value={user?.lastName}
                modifier="inline"
                disabled
            >
                Last name:
            </FormField>
            <div className="form__buttons">
                <Button type="submit">Save</Button>
                <Button type="button" onClick={() => dispatch(toggleEditMode())}>Cancel</Button>
            </div>
        </form>
    )
}