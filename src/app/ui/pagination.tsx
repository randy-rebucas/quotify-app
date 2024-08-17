'use client';

export default function Pagination({ items, pageSize, currentPage, onPageChange }: { items: number, pageSize: number, currentPage: number, onPageChange: () => void }) {
    const pagesCount = Math.ceil(items / pageSize); // 100/10

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    console.log(pages)


    return (
        <div>Pagination</div>
    )
}