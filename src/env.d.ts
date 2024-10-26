/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare namespace App {
	// Note: 'import {} from ""' syntax does not work in .d.ts files.
	interface Locals {
		session: import("@lib/session").Session | null;
		user: import("@lib/user").User | null;
	}
}
