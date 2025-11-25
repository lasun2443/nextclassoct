// // import { verifyUser } from "@/utils/session"
// // import { redirect } from "next/navigation"

// // const page = async () => {
// //     const { user, success} = await verifyUser()
// //     if (!success) {
// //         redirect("/signin")
// //     }




// //     return(
// //         <div>
// //             <div className="flex flex-col gap-2">
// //                 <div>Firstname: {user.Firstname} </div>
// //                 <div>Lastname: {user.lastname} </div>
// //                 <div>Email: {user.email} </div>

// //             </div>
// //         </div>
// //     )
// // }

// // export default page






// // profile.page..
// "use client"
// import React, { useEffect, useState } from 'react'
// import { getCurrentUser, updateProfile, logout } from '../utils/action'
// import { useRouter } from 'next/navigation'

// interface User {
//     _id: string;
//     firstname: string;
//     lastname: string;
//     email: string;
// }

// const ProfilePage = () => {
//     const [user, setUser] = useState<User | null>(null)
//     const [loading, setLoading] = useState(true)
//     const [updating, setUpdating] = useState(false)
//     const [editMode, setEditMode] = useState(false)
//     const [mounted, setMounted] = useState(false)
//     const [formData, setFormData] = useState({
//         firstname: '',
//         lastname: '',
//         email: ''
//     })
//     const router = useRouter()

//     useEffect(() => {
//         setMounted(true)
//         fetchUser()
//     }, [])

//     const fetchUser = async () => {
//         try {
//             setLoading(true)
//             console.log("🔄 Starting to fetch user...");
//             const response = await getCurrentUser()
//             console.log("📨 Response from getCurrentUser:", response);

//             if (response.success && response.user) {
//                 console.log("✅ User data received:", response.user);
//                 setUser(response.user)
//                 setFormData({
//                     firstname: response.user.firstname,
//                     lastname: response.user.lastname,
//                     email: response.user.email
//                 })
//             } else {
//                 console.log("❌ Failed to get user:", response.message);
//                 alert(response.message || "Please sign in to access your profile")
//                 router.push('/signin')
//             }
//         } catch (error) {
//             console.error("🚨 Error in fetchUser:", error)
//             alert("Something went wrong while loading your profile")
//         } finally {
//             setLoading(false)
//         }
//     }

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//     const handleUpdate = async (e: React.FormEvent) => {
//         e.preventDefault()
//         if (!mounted) return

//         try {
//             setUpdating(true)
//             const response = await updateProfile(formData)
//             if (response.success) {
//                 setUser(response.user!)
//                 setEditMode(false)
//                 alert("Profile updated successfully!")
//                 await fetchUser()
//             } else {
//                 alert(response.message || "Failed to update profile")
//             }
//         } catch (error) {
//             console.error("Error updating profile:", error)
//             alert("Something went wrong while updating your profile")
//         } finally {
//             setUpdating(false)
//         }
//     }

//     const handleLogout = async () => {
//         if (!mounted) return

//         try {
//             const response = await logout()
//             if (response.success) {
//                 router.push('/signin')
//             } else {
//                 alert(response.message || "Failed to logout")
//             }
//         } catch (error) {
//             console.error("Error during logout:", error)
//             alert("Something went wrong during logout")
//         }
//     }

//     if (!mounted || loading) {
//         return (
//             <div className="flex items-center justify-center min-h-screen bg-gray-100">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//                     <p className="mt-4 text-gray-600">Loading your profile...</p>
//                 </div>
//             </div>
//         )
//     }

//     if (!user) {
//         return (
//             <div className="flex items-center justify-center min-h-screen bg-gray-100">
//                 <div className="text-center">
//                     <p className="text-gray-600">Unable to load user data.</p>
//                     <button
//                         onClick={() => router.push('/signin')}
//                         className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
//                     >
//                         Go to Sign In
//                     </button>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
//             <div className="max-w-4xl mx-auto">
//                 <div className="text-center mb-8">
//                     <h1 className="text-4xl font-bold text-gray-900 mb-2">User Profile</h1>
//                     <p className="text-gray-600">Manage your account information</p>
//                 </div>

//                 <div className="grid md:grid-cols-3 gap-8">
//                     <div className="md:col-span-2">
//                         <div className="bg-white rounded-2xl shadow-lg p-6">
//                             <div className="flex justify-between items-center mb-6">
//                                 <h2 className="text-2xl font-semibold text-gray-900">Personal Information</h2>
//                                 <div className="flex gap-2">
//                                     {!editMode ? (
//                                         <>
//                                             <button
//                                                 onClick={() => setEditMode(true)}
//                                                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
//                                             >
//                                                 Edit Profile
//                                             </button>
//                                             <button
//                                                 onClick={handleLogout}
//                                                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-200"
//                                             >
//                                                 Logout
//                                             </button>
//                                         </>
//                                     ) : (
//                                         <button
//                                             onClick={() => {
//                                                 setEditMode(false)
//                                                 setFormData({
//                                                     firstname: user.firstname,
//                                                     lastname: user.lastname,
//                                                     email: user.email
//                                                 })
//                                             }}
//                                             className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-200"
//                                         >
//                                             Cancel
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>

//                             <form onSubmit={handleUpdate} className="space-y-6">
//                                 <div className="grid md:grid-cols-2 gap-4">
//                                     <div>
//                                         <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-2">
//                                             First Name
//                                         </label>
//                                         <input
//                                             id="firstname"
//                                             type="text"
//                                             name="firstname"
//                                             value={formData.firstname}
//                                             onChange={handleInputChange}
//                                             disabled={!editMode}
//                                             required
//                                             placeholder="Enter first name"
//                                             title="First name"
//                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition duration-200"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-2">
//                                             Last Name
//                                         </label>
//                                         <input
//                                             id="lastname"
//                                             type="text"
//                                             name="lastname"
//                                             value={formData.lastname}
//                                             onChange={handleInputChange}
//                                             disabled={!editMode}
//                                             required
//                                             placeholder="Enter last name"
//                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition duration-200"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                                         Email Address
//                                     </label>
//                                     <input
//                                         id="email"
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         disabled={!editMode}
//                                         required
//                                         placeholder="name@example.com"
//                                         title="Email address"
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition duration-200"
//                                     />
//                                 </div>

//                                 {editMode && (
//                                     <button
//                                         type="submit"
//                                         disabled={updating}
//                                         className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 rounded-lg transition duration-200 font-semibold flex items-center justify-center"
//                                     >
//                                         {updating ? (
//                                             <>
//                                                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                                                 Updating...
//                                             </>
//                                         ) : (
//                                             'Update Profile'
//                                         )}
//                                     </button>
//                                 )}
//                             </form>
//                         </div>
//                     </div>

//                     <div className="md:col-span-1">
//                         <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
//                             <div className="text-center mb-6">
//                                 <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
//                                     {user.firstname?.charAt(0)}{user.lastname?.charAt(0)}
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-gray-900">
//                                     {user.firstname} {user.lastname}
//                                 </h3>
//                                 <p className="text-gray-600">{user.email}</p>
//                             </div>

//                             <div className="space-y-4">
//                                 <div className="bg-blue-50 rounded-lg p-4">
//                                     <h4 className="font-semibold text-blue-900 mb-2">Account Status</h4>
//                                     <div className="flex items-center">
//                                         <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
//                                         <span className="text-sm text-green-700">Active</span>
//                                     </div>
//                                 </div>

//                                 <div className="bg-green-50 rounded-lg p-4">
//                                     <h4 className="font-semibold text-green-900 mb-2">User ID</h4>
//                                     <p className="text-sm text-green-700 font-mono truncate">
//                                         {user._id}
//                                     </p>
//                                 </div>

//                                 <div className="bg-purple-50 rounded-lg p-4">
//                                     <h4 className="font-semibold text-purple-900 mb-2">Profile Completeness</h4>
//                                     <div className="w-full bg-gray-200 rounded-full h-2">
//                                         <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
//                                     </div>
//                                     <p className="text-sm text-purple-700 mt-2">75% Complete</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProfilePage

"use client"
import React, { useEffect, useState } from 'react'
import { getCurrentUser, updateProfile, logout } from '../utils/action'
import { useRouter } from 'next/navigation'

interface User {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
}

const ProfilePage = () => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [updating, setUpdating] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: ''
    })
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
        fetchUser()
    }, [])

    const fetchUser = async () => {
        try {
            setLoading(true)
            const response = await getCurrentUser()

            if (response.success && response.user) {
                setUser(response.user)
                setFormData({
                    firstname: response.user.firstname,
                    lastname: response.user.lastname,
                    email: response.user.email
                })
            } else {
                router.push('/signin')
            }
        } catch (error) {
            alert("Failed to load profile")
        } finally {
            setLoading(false)
        }
    }

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            setUpdating(true)
            const response = await updateProfile(formData)
            if (response.success) {
                setEditMode(false)
                await fetchUser()
            } else {
                alert(response.message)
            }
        } catch (error) {
            alert("Update failed")
        } finally {
            setUpdating(false)
        }
    }

    const handleLogout = async () => {
        const response = await logout()
        if (response.success) router.push('/signin')
    }

    if (!mounted || loading)
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-blue-100">
                <div className="glass-card px-6 py-8 text-center">
                    <div className="animate-spin h-10 w-10 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto"></div>
                    <p className="text-gray-700 mt-4">Loading profile...</p>
                </div>
            </div>
        )

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-10">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">

                {/* --- LEFT PROFILE CARD --- */}
                <div className="glass-card p-6 rounded-2xl shadow-xl sticky top-10">
                    <div className="text-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white flex items-center justify-center text-3xl font-bold mx-auto shadow-lg">
                            {user?.firstname[0]}{user?.lastname[0]}
                        </div>

                        <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                            {user?.firstname} {user?.lastname}
                        </h2>
                        <p className="text-gray-600 text-sm">{user?.email}</p>

                        <div className="mt-6 space-y-3">
                            <div className="bg-blue-50 p-4 rounded-xl">
                                <p className="font-semibold text-blue-900">Account Status</p>
                                <div className="flex items-center mt-1">
                                    <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                                    <span className="text-green-700 text-sm">Active</span>
                                </div>
                            </div>

                            <div className="bg-green-50 p-4 rounded-xl">
                                <p className="font-semibold text-green-900">User ID</p>
                                <p className="mt-1 text-sm font-mono text-green-700 truncate">{user?._id}</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
                    >
                        Logout
                    </button>
                </div>

                
                <div className="md:col-span-2 glass-card p-8 rounded-2xl shadow-xl">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-800">Profile Settings</h2>

                        {!editMode ? (
                            <button
                                onClick={() => setEditMode(true)}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow transition"
                            >
                                Edit Profile
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    setEditMode(false)
                                    setFormData({
                                        firstname: user!.firstname,
                                        lastname: user!.lastname,
                                        email: user!.email
                                    })
                                }}
                                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-xl transition"
                            >
                                Cancel
                            </button>
                        )}
                    </div>

                    <form onSubmit={handleUpdate} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="flex flex-col">
                                <label htmlFor="firstname" className="text-gray-700 mb-1">First Name</label>
                                <input
                                    id="firstname"
                                    type="text"
                                    disabled={!editMode}
                                    value={formData.firstname}
                                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                    placeholder="Enter first name"
                                    title="First name"
                                    className="input-style"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="lastname" className="text-gray-700 mb-1">Last Name</label>
                                <input
                                    id="lastname"
                                    type="text"
                                    disabled={!editMode}
                                    value={formData.lastname}
                                    onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                                    placeholder="Enter last name"
                                    title="Last name"
                                    className="input-style"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="email" className="text-gray-700 mb-1" >Email</label>
                            <input
                                id="email"
                                type="email"
                                disabled={!editMode}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="name@example.com"
                                title="Email address"
                                className="input-style"
                            />
                        </div>

                        {editMode && (
                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl shadow-lg transition flex items-center justify-center"
                            >
                                {updating ? (
                                    <div className="animate-spin h-5 w-5 border-4 border-black border-t-transparent rounded-full"></div>
                                ) : (
                                    "Save Changes"
                                )}
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
