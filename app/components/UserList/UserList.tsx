"use client"
import React, { useEffect, useState } from 'react';

interface User {
    id: string;
    username: string;
    name: string;
    role: string;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<string>('');
    const [selectedRole, setSelectedRole] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/Users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data: User[] = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);

    const handleRoleChange = async () => {
        try {
            const response = await fetch(`/api/Users`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: selectedUserId, role: selectedRole }),
            });

            if (response.ok) {
                setUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user.id === selectedUserId ? { ...user, role: selectedRole } : user
                    )
                );
                alert('User role updated successfully!');
            } else {
                console.error('Error updating user role:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating user role:', error);
        }
    };

    const handleSelectChange = (userId: string, role: string) => {
        setSelectedUserId(userId);
        setSelectedRole(role);
    };

    return (
        <>
            <h1>Lista de Usuario</h1>

            <div className="max-w-screen-sm mx-auto mt-8">
                <table className="border-collapse border border-accent w-full">
                    <thead>
                        <tr className='bg-white'>
                            <th className="border border-accent text-center px-4 py-2 text-slate-800 bg-accent/50">User</th>
                            <th className="border border-accent text-center px-4 py-2 text-slate-800 bg-accent/50">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className='border border-accent'>
                                <td className='text-text border-accent bg-accent/10 text-center'>{user.name || user.username}</td>
                                <td className='text-text border-accent bg-accent/10 text-center border'>
                                    <select
                                        name="Rol"
                                        id=""
                                        className='bg-transparent'
                                        value={selectedUserId === user.id ? selectedRole : user.role}
                                        onChange={(e) => handleSelectChange(user.id, e.target.value)}
                                    >
                                        <option defaultValue={0}>Usuario</option>
                                        <option value="Admin">Administrador</option>
                                        <option value="Security">Seguridad</option>
                                        <option value="Mantenimiento">Mantenimiento</option>
                                        <option value="Consultas">Consultas</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='items-center justify-center flex mt-4'>
                    <button onClick={handleRoleChange} className='bg-transparent rounded border-accent border px-4 py-2 text-accent'>Actualizar Usuarios</button>
                </div>
            </div>
        </>
    );
};

export default UserList;
