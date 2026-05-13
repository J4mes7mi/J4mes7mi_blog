<script lang="ts">
import { onMount, onDestroy } from "svelte";

let container: HTMLDivElement;

let instance: any;

onMount(async () => {
	const { init } = await import("@waline/client/full");
	import("@waline/client/waline.css");
	import("@waline/client/waline-meta.css");

	instance = init({
		el: container,
		serverURL: "https://blog.james7.cn",
		emoji: ["//unpkg.com/@waline/emojis@1.1.0/tw-emoji"],
		lang: "zh-CN",
		pageSize: 10,
		reaction: false,
		comment: false,
		login: "enable",
		authorBadge: true,
		requiredMeta: ["nick"],
		locale: {
			placeholder: "欢迎留下你的想法……",
			send: "发布",
			reply: "回复",
			nick: "昵称",
			mail: "邮箱",
			link: "链接",
			sofa: "暂无评论，来坐沙发吧",
			admin: "博主"
		}
	});
});

onDestroy(() => {
	if (instance) {
		instance.destroy();
		instance = undefined;
	}
});
</script>

<div id="comment-section">
	<div bind:this={container} class="waline-container"></div>
</div>

<style>
	:global(.waline-container) {
		--waline-theme-color: var(--primary-color);
		--waline-active-color: var(--primary-color);
		--waline-text-color: var(--text-color);
		--waline-bg-color: var(--background-color);
		--waline-bg-color-light: color-mix(in srgb, var(--primary-color) 5%, transparent);
		--waline-border-color: var(--weak-color);
		--waline-disable-bg-color: var(--weak-color);
		--waline-disable-color: var(--secondary-color);
	}

	/* 隐藏评论元信息中的 IP 来源、浏览器和操作系统 */
	:global(.wl-addr),
	:global(.wl-browser),
	:global(.wl-os) {
		display: none !important;
	}

	/* 博主标识：🏠 图标 + 悬停显示「博主」 */
	:global(.wl-badge) {
		font-size: 0;
		position: relative;
		display: inline-flex;
		align-items: center;
		vertical-align: middle;
		cursor: default;
	}

	:global(.wl-badge::before) {
		content: "🏠";
		font-size: 14px;
		line-height: 1;
	}

	:global(.wl-badge::after) {
		content: "博主";
		position: absolute;
		bottom: calc(100% + 6px);
		left: 50%;
		transform: translateX(-50%);
		background: rgba(0, 0, 0, 0.75);
		color: #fff;
		font-size: 12px;
		font-weight: normal;
		padding: 2px 8px;
		border-radius: 4px;
		white-space: nowrap;
		opacity: 0;
		transition: opacity 0.2s ease;
		pointer-events: none;
		z-index: 10;
	}

	:global(.wl-badge:hover::after) {
		opacity: 1;
	}
</style>
