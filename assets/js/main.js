import { socialLinks, techStack, projects } from './data.js';

// 1. Social Links Render 
// 1. Social Links Render (Logos Only)
const socialGrid = document.getElementById('social-grid');
if (socialGrid) {
    socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = "_blank";
        
        // කාඩ් එක අයින් කරලා icon එකට විතරක් effect එක දුන්නා
        a.className = "group relative p-2 transition-all duration-300 hover:-translate-y-2 hover:scale-110";
        
        // ලෝගෝ එක (text-4xl දාලා ටිකක් ලොකු කරලා තියෙන්නේ)
        a.innerHTML = `
            <i class="${link.icon} text-4xl text-slate-400 group-hover:${link.color || 'text-blue-400'} drop-shadow-none group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"></i>
        `;
        socialGrid.appendChild(a);
    });
}

// 2. Tech Stack Render
const techContainer = document.getElementById('tech-stack');
if (techContainer) {
    techStack.forEach(tech => {
        const span = document.createElement('span');
        // අලුත් theme එකට ගැලපෙන්න badge එක හැදුවා
        span.className = `flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors`;
        span.innerHTML = `<i class="${tech.icon} ${tech.color}"></i> ${tech.name}`;
        techContainer.appendChild(span);
    });
}

// 3. Projects Render
const projectGrid = document.getElementById('project-grid');
if (projectGrid) {
    projects.forEach(proj => {
        const colorClass = proj.color === 'orange' ? 'text-orange-400' : 'text-blue-400';
        const bgClass = proj.color === 'orange' ? 'bg-orange-500/10' : 'bg-blue-500/10';
        const borderClass = proj.color === 'orange' ? 'border-orange-500/20' : 'border-blue-500/20';

        const a = document.createElement('a');
        a.href = proj.url;
        a.target = "_blank";
        // පරණ card class එක වෙනුවට අලුත් ලස්සන UI එක
        a.className = "p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 group block";
        
        a.innerHTML = `
            <div class="flex items-center gap-2 mb-4">
                <span class="text-[10px] font-bold px-2 py-1 rounded ${bgClass} ${colorClass} border ${borderClass} uppercase tracking-wider">${proj.category}</span>
                <span class="text-[10px] text-slate-500 font-mono">${proj.date}</span>
            </div>
            <h3 class="text-xl font-bold text-white group-hover:${colorClass} transition-colors">${proj.title}</h3>
            <p class="text-slate-400 text-sm mt-3 leading-relaxed">${proj.desc}</p>
        `;
        projectGrid.appendChild(a);
    });
}
