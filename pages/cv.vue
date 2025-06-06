<script setup lang="ts">
definePageMeta({
  layout: 'plain'
})

useHead({
  title: 'CV - Ekene Eze',
  meta: [
    { name: 'description', content: 'Professional CV of Ekene Eze - Developer Advocate and Full-Stack Developer' }
  ]
})

const downloadPDF = () => {
  const element = document.getElementById('cv-content')
  const opt = {
    margin: 1,
    filename: 'ekene-eze-cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  }
  // @ts-ignore
  window.html2pdf().set(opt).from(element).save()
}
</script>

<template>
  <div class="relative container mx-auto px-4 py-12 max-w-4xl">
    <button 
      @click="downloadPDF" 
      class="absolute top-4 right-4 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-600 rounded-md hover:border-gray-400 transition-colors duration-200 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Download PDF
    </button>
    <div id="cv-content">
    <h1 class="text-4xl font-bold mb-2 text-[#fff]">Ekene Eze</h1>
    <p class="text-gray-400 mb-2">Dubai, UAE</p>
    <p class="text-gray-400 mb-8">
      <a href="mailto:ekeneze3@gmail.com" class="text-blue-600 hover:underline">ekeneze3@gmail.com</a> • 
      <a href="https://linkedin.com/in/ekeneeze" class="text-blue-600 hover:underline">linkedin.com/in/ekeneeze</a> • 
      <a href="https://kenny.engineer" class="text-blue-600 hover:underline">kenny.engineer</a>
    </p>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-500">Professional Summary</h2>
      <p class="text-gray-400">
        Experienced Developer Advocate and Fullstack Engineer with 6+ years leading developer experience and
        relations initiatives across top startups and global platforms. Proven ability to scale developer
        communities, create impactful content, build DevTools and APIs, and represent engineering teams on stage
        and online. Skilled in driving adoption through advocacy, open-source leadership, and technical
        content, create technical tutorials, build relationships, and experiment engineering team on client
        and APIs. Skilled at driving adoption through delivering open-source leadership and technical
        enablement.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-500">Core Skills</h2>
      <ul class="list-disc pl-5 space-y-2 text-gray-400">
        <li>Developer Advocacy & DevRel Strategy</li>
        <li>Fullstack Engineering (JS, Node.js, React, Web3)</li>
        <li>Open Source Ecosystems</li>
        <li>Community Building & Program Leadership</li>
        <li>Technical Writing & Video Tutorials</li>
        <li>Public Speaking & Conference Engagement</li>
        <li>Blockchain Development (Solidity, Web3.js)</li>
      </ul>
    </section>
   
    <hr class="border-gray-700 my-8 mb-8" />
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-500">Professional Experience</h2>
      
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-500">Shardeum - Developer Advocate</h3>
        <p class="text-gray-600">March 2024 - Present</p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-400">
          <li>Lead open-source initiatives and internal tooling: JSON-RPC Server, Explorer, Network Monitor, Docs</li>
          <li>Host weekly livestreams and represent Shardeum at international blockchain conferences</li>
          <li>Manage community onboarding, content creation, and ecosystem developer engagement</li>
        </ul>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-500">Collab.Land (Abridged) - Lead Developer Advocate</h3>
        <p class="text-gray-600">Nov 2022 - March 2023</p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-400">
          <li>Led SDK core developer tools including JavaScript APIs and developer portal</li>
          <li>Managed SDK and third-party integration, developer education, platform to 40%+</li>
          <li>Built an Dev Developer Experience team to scale engagement and support</li>
        </ul>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-500">Netlify - Senior Developer Experience Engineer</h3>
        <p class="text-gray-600">Dec 2020 - Dec 2022</p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-400">
          <li>Built official Netlify developer tools with React, Publishing</li>
          <li>Created educational content blog tutorials, developed github org Next domains adaption</li>
          <li>Spearheaded built validation developer conference and community events</li>
        </ul>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-500">Flutterwave - Head of Developer Relations</h3>
        <p class="text-gray-600">2018 - 2020</p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-400">
          <li>Led all developer tools initiatives across all product suits</li>
          <li>Build community presence through developer events, SDKs, and technical programs</li>
        </ul>
      </div>
    </section>

    <hr class="border-gray-700 my-8 mb-8" />

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-500">Education</h2>
      <div>
        <h3 class="text-xl font-semibold text-gray-500">BSc, Chemical Engineering</h3>
        <p class="text-gray-600">University Graduate • 2015</p>
      </div>
    </section>

    <hr class="border-gray-700 my-8 mb-8" />

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-500">Publications & Content</h2>
      <ul class="list-disc pl-5 space-y-2 text-gray-400">
        <li>Author: "Web Development on Netlify" (Packt Publishing)</li>
        <li>YouTube: 40k+ views on educational content</li>
        <li>Technical Blog: <a href="https://kenny.engineer/blogging" class="text-blue-600 hover:underline">kenny.engineer/blogging</a></li>
      </ul>
    </section>
    <hr class="border-gray-700 my-8 mb-8" />
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-500">Community & Volunteer Experience</h2>
      <div class="space-y-2 text-gray-400">
        <p><strong>Concatenate Conference • Co-organizer</strong></p>
        <ul class="list-disc pl-5 mt-2">
          <li>Spearheaded expansion and partnerships (Microsoft, Netlify, Webflow).</li>
        </ul>
        <p><strong>ForLoop Africa • Facilitator</strong></p>
        <ul class="list-disc pl-5 mt-2">
          <li>Drove developer community growth across African countries.</li>
        </ul>
      </div>
    </section>

    <hr class="border-gray-700 my-8 mb-8" />

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-500">Languages & Interests</h2>
      <ul class="list-disc pl-5 space-y-2 text-gray-400">
        <li>Languages: English (Native), Igbo (Native)</li>
        <li>Interests: Travel, Cultural Exploration, Public Speaking, Design, AI & Web3</li>
      </ul>
    </section>

    <hr class="border-gray-700 my-8 mb-8" />

    <section>
      <h2 class="text-2xl font-semibold mb-4 text-gray-500">Online Presence</h2>
      <ul class="list-disc pl-5 space-y-2 text-gray-400">
        <li>Website: <a href="https://kenny.engineer" class="text-blue-600 hover:underline">kenny.engineer</a></li>
        <li>Twitter: <a href="https://twitter.com/kenny_io" class="text-blue-600 hover:underline">@kenny_io</a></li>
        <li>YouTube: <a href="https://youtube.com/@EkeneEze" class="text-blue-600 hover:underline">@EkeneEze</a></li>
      </ul>
    </section>
    </div>
  </div>
</template>
