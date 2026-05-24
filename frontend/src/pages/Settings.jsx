import SettingsSection from "../components/settings/SettingsSection"
import FormInput from "../components/ui/FormInput"
import Button from "../components/ui/Button"

function Settings() {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-[#1E1B4B]">
                    Settings
                </h1>

                <p className="text-gray-500 mt-2">
                    Manage your account and Flowly preferences.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <SettingsSection title="Profile">

                    <div className="flex flex-col gap-4">
                        <FormInput
                            label="Name"
                            placeholder="Your name"
                        />

                        <FormInput
                            label="Email"
                            type="email"
                            placeholder="you@example.com"
                        />

                        <Button>
                            Save changes
                        </Button>
                    </div>
                </SettingsSection>

                <SettingsSection title="Preferences">

                    <div className="flex items-center justify-between py-4 border-b border-gray-100">
                        <div>
                            <p className="font-semibold text-[#1E1B4B]">
                                Email notifications
                            </p>
                            <p className="text-sm text-gray-500">
                                Receive updates about your tasks.
                            </p>
                        </div>

                        <span className="bg-[#F3F0FF] text-[#6C5CE7] px-3 py-1 rounded-full text-sm font-semibold">
                            On
                        </span>
                    </div>

                    <div className="flex items-center justify-between py-4">
                        <div>
                            <p className="font-semibold text-[#1E1B4B]">
                                Theme
                            </p>
                            <p className="text-sm text-gray-500">
                                Current theme preference.
                            </p>
                        </div>

                        <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm font-semibold">
                            Light
                        </span>
                    </div>
                </SettingsSection>
            </div>
        </div>
    )
}

export default Settings