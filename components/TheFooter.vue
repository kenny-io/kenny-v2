<template>
    <footer>
        <TheWrapper>
            <div class="border text-white flex flex-col items-start md:items-center px-4 pt-3 pb-10 md:pb-24 rounded-3xl">
                <h3 class="text-2xl md:text-4xl tracking-tighter inline-flex px-[20px] py-[18px] -mt-14 bg-black">Subscribe to my Newsletter</h3>
                <p class="text-base tracking-tight w-full md:w-2/3 text-left md:text-center text-[#B0B0B0] mt-12">
                    I spend most of my time making contents like blog posts, video tutorials and courses, speaking at
                    conference or delivering workshops.. If you're interested in web development and Jamstack technologies,
                    I'll be happy to send you the contents I make if you give me your email address below
                </p>
                <form class="flex flex-col md:flex-row md:justify-center mt-10 md:mt-14 w-full">
                    <div class="w-full md:w-64 h-fit md:mt-0 bg-[#252525] rounded-md relative mr-1">
                        <input class="bg-transparent rounded-xl w-full h-[45px] pl-4 py-3  focus:border-none outline-1 outline-[#B7CD14] active:border-none focus-visible:border-none placeholder:text-[#878787]" placeholder="Joshua" type="text" id="name" name="name" required>
                    </div>
                    <div class="w-full md:w-64 h-fit mt-1 md:mt-0 bg-[#252525] rounded-md relative mr-2">
                        <input class="bg-transparent rounded-xl w-full h-[45px] pl-4 py-3  focus:border-none outline-1 outline-[#B7CD14] active:border-none focus-visible:border-none placeholder:text-[#878787]" placeholder="koha@gmail.com" type="email" id="email" name="email" required>
                    </div>
                    <button type="submit" class="w-full md:w-[233px] h-[45px] px-5 py-6 mt-4 md:mt-0 bg-[#B7CD14] rounded-md text-[#090909] text-xl tracking-tight font-semibold flex items-center justify-center">Subscribe</button>
                </form>
            </div>
            <div class="pt-12 md:py-6 flex flex-col md:flex-row justify-between items-center">
                <div class="inline-flex gap-4">
                    <h4 class="text-[#6F6F6F] text-base font-normal tracking-tighter">
                        DUBAI, AE
                    </h4>
                    <span class="text-[#6F6F6F] text-base font-normal tracking-tighter">
                        16 : 25
                    </span>
                </div>
                <div class="flex flex-row items-center gap-4">
                    <div>
                        <ul class="flex flex-rows text-[#6F6F6F] gap-2">
                            <li>GITHUB</li>
                            <li>LINKEDIN</li>
                            <li>TWITTER</li>
                            <li>THREADS</li>
                        </ul>
                    </div>
                    <div class="border text-[#6F6F6F] rounded-full">
                        <p class="py-1 px-4 text-[#6F6F6F] text-sm uppercase tracking-tight font-semibold">Light</p>
                    </div>
                </div>
            </div>
        </TheWrapper>

    </footer>
</template>