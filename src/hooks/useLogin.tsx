"use client";

import {setToken} from "@/hooks/useToken";
import {loginValidation} from "@/lib/validations/loginValidation";
import {loginService} from "@/services/loginService";
import {LoginRequest} from "@/types/interfaces/LoginRequest";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";


export const useLogin = () => {
    const router: AppRouterInstance = useRouter();

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: zodResolver(loginValidation),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: LoginRequest) => loginService(data),
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: (data) => {
            if(data && data.success) {
                setToken(data.data.token);

                router.push('/');
            }
        }
    });

    const onSubmit = async(data: LoginRequest) => {
        mutate(data);
    };

    return {
        register,
        handleSubmit,
        errors,
        reset,
        onSubmit,
        isPending,
        isError,
        error,
        isSuccess,
    };
};

export const useLogout = () => {
    localStorage.removeItem('token');

    window.location.reload();
};
