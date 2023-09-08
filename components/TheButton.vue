<template>
    <button
        class="px-4 py-3 text-sm text-[#999] tracking-tight uppercase border rounded-full border-solid border-[#999] mt-10 flex items-center gap-2 hover:bg-slate-50/10 hover:transition hover:duration-500 hover:ease-in-out">
        <slot name="icon-left"></slot>
        <slot />
        <slot name="icon-right"></slot>
    </button>
</template>