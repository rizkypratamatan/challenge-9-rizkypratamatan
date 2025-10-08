"use client";

import Header from "@/components/Store/Header";
import ProductDetailPhoto from "@/components/Store/ProductDetailPhoto";
import Sidebar from "@/components/Store/Sidebar";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {useAddProduct} from "@/hooks/useAddProduct";
import {useCategories} from "@/hooks/useCategories";
import {useProduct} from "@/hooks/useProduct";
import {ProductCategory} from "@/types/interfaces/ProductCategory";
import Image from "next/image";
import Link from "next/link";
import {useParams} from "next/navigation";
import React, {RefObject, useEffect, useRef, useState} from "react";
import {Controller} from "react-hook-form";


const StoreProductsDetail: React.FC = () => {
    const id: number = Number(useParams().id as string);
    const imageRef: RefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null);

    const [imagePreview, setImagePreview] = useState<string[]>();

    const imageClick = () => {
        imageRef.current?.click();
    };

    const imageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = event.target.files;

        if(files) {
            const urls: string[] = [];

            for(const file of files) {
                urls.push(URL.createObjectURL(file));
            }

            setImagePreview(urls);
        }
    };

    const {data: dataProduct, isLoading, isError, error} = useProduct(id);
    const {data: dataCategories} = useCategories();
    const {register, control, setValue, handleSubmit, errors, onSubmit} = useAddProduct();

    useEffect(() => {
        setValue('id', String(dataProduct?.data.id));
        setValue('title', dataProduct?.data.title ?? '');
        setValue('price', String(dataProduct?.data.price));
        setValue('stock', String(dataProduct?.data.stock));
        setValue('description', dataProduct?.data.description ?? '');
        setValue('categoryId', String(dataProduct?.data.category.id));
        setImagePreview(dataProduct?.data.images);
    }, [dataProduct]);

    return (
        <React.Fragment>
            <Sidebar/>
            <Header/>
            <main className="pt-104_ store-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="flex flex-col gap-6 max-w-760_ mx-4 p-5 bg-contrast-0 border border-neutral-200 rounded-xl shadow-25 md:mx-auto">
                        <div className="flex gap-3">
                            <Link href={'/store/products'}>
                                <Image src={'/images/icon-arrow-narrow-left.png'} width={32} height={32} alt={'Arrow Left Icon'}/>
                            </Link>
                            <h2 className="text-2xl font-bold">{dataProduct?.data.id ? 'Edit' : 'Add'} Product</h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Input {...register('title')} className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Product Name"/>
                            {errors.title && <p className="text-sm text-red">{errors.title.message}</p>}
                            <Controller name="categoryId" control={control} render={({field}) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className="w-full !h-56_ px-3 py-2">
                                        <SelectValue placeholder={'Category'}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {dataCategories?.data.categories.map((category: ProductCategory, index: number) => (
                                            <SelectItem key={index} value={String(category.id)}>{category.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}/>
                            {errors.categoryId && <p className="text-sm text-red">{errors.categoryId.message}</p>}
                            <Input {...register('price')} className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Price"/>
                            {errors.price && <p className="text-sm text-red">{errors.price.message}</p>}
                            <Input {...register('stock')} className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Stock"/>
                            {errors.stock && <p className="text-sm text-red">{errors.stock.message}</p>}
                            <Textarea {...register('description')} className="px-3 py-2 border border-neutral-300 resize-none" rows={5} placeholder="Description"></Textarea>
                            {errors.description && <p className="text-sm text-red">{errors.description.message}</p>}
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">Photo Product</p>
                                <Input {...register('images')} ref={(event) => {
                                    register("images").ref(event);
                                    imageRef.current = event;
                                }} className="hidden" type="file" multiple={true} placeholder="Photo" onChange={(event) => {
                                    imageChange(event);
                                    register('images').onChange(event);
                                }}/>
                                <div className="flex flex-wrap gap-3">
                                    {[0, 1, 2, 3, 4].map((index: number) => (
                                        <ProductDetailPhoto key={index} index={index} files={imagePreview} onClick={imageClick}/>
                                    ))}
                                </div>
                                {errors.images &&
                                    <p className="text-sm text-red">{errors.images.message as string}</p>}
                            </div>
                            <Input {...register('isActive')} className="hidden" type="text" placeholder="Is Active"/>
                            {errors.isActive && <p className="text-sm text-red">{errors.isActive.message}</p>}
                        </div>
                        <Button className="h-12 text-sm font-bold">Save</Button>
                    </fieldset>
                </form>
            </main>
        </React.Fragment>
    );
};

export default StoreProductsDetail;
