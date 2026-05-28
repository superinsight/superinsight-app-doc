# Release Notes

## Overview

Release notes provide the list of items on feature changes, known issues, fixes, workarounds, and deprecations for recent software releases.

---------------------------------------

#### June 12, 2026 Release *(Pre-Release)*

!!! info "Scheduled Release"
    This release is scheduled for **June 12, 2026** and has not yet gone live.

This release introduces **Case Review** — a powerful replacement for the Research section — along with three specialized AI agents and updated pricing that applies across Case Review and all Reports.

**New: Case Review**

* **Case Review** replaces the Research section as the primary way to interact with your case files. You can start a Case Review with **0 credits** and have immediate access to all files within the case — no setup required.

* **Research Deprecation** - The Research section will be **deprecated by end of June 2026**. Please transition your workflows to Case Review before then.

**New: Case Review Agents**

Three specialized agents are now available in Case Review, each designed for a distinct type of task:

| Agent | Best For | Max Output | Cost per Request |
|---|---|---|---|
| **Agent Lite** | Finding specific information quickly — needle-in-a-haystack searches | ~1–10 pages | 0.05 credits |
| **Agent Think** | Writing briefs, arguments, and other content requiring creative writing skills | ~1–10 pages | 0.25 credits |
| **Agent Deep** | Processing thousands of pages and producing structured timelines and chronologies | Up to 1,000 pages | 0.25 credits |

**Updated Pricing**

* **Agent-based pricing** applies to all requests made in **Case Review and all Reports**.

* **Daily Free Credits** - A daily allocation of free credits is provided for Lite agent usage, allowing lightweight queries without drawing from your credit balance.

---------------------------------------

#### April 1, 2026 Release

This update introduces major enhancements to file management, expands supported upload formats, and includes key stability fixes for file parsing and permission management.

**Improvements**

* **Advanced File Management**
    * **Rename** - Users can now rename files and folders directly via the right-click context menu.
    * **Move to Folder** - Move files intuitively using drag-and-drop or the newly designed folder selection dialog. The system includes built-in safeguards and warnings to prevent accidental movement of files linked to active reports.
    * **Retry Failed Pages** - If a file encounters an error during processing, users can now specifically retry the failed pages. The system updates its status in real-time, eliminating the need to re-upload the entire document.

* **Expanded Upload Formats** - Added support for image files (JPG, JPEG, PNG) and email files (EML, MSG), allowing for a wider variety of data sources to be imported for analysis.

* **Encrypted PDF Detection** - The system now automatically detects password-protected PDFs during the upload stage and immediately displays a warning dialog, preventing downstream processing failures.

* **Upgraded Bookmark Extraction** - Fixed and upgraded the technology used to extract PDF bookmarks. The system now reads and preserves bookmarks from all PDF structures without missing chapter information.

**Bug Fixes**

* **Shared Folder Permissions Fix** - Resolved a permission resolution issue for sub-folders within Shared Cases, ensuring accurate read/write access for team collaboration.

---------------------------------------

#### March 23, 2026 Release

This release focuses on resolving issues within the report editor and payment flow, enhancing system stability, and improving the output quality for specific report templates.

**Improvements**

* **Template Quality Enhancements** - Upgraded the generation logic for the SSA 5-Step Chronology templates. This update improves structural consistency and the overall quality of the analysis.

* **Improved Payment Error Handling** - Refined the error handling mechanism during the subscription and payment process. If a transaction fails, users will now see a clear error dialog instead of being stuck on a loading screen.

**Bug Fixes**

* **Report Editor Fix** - Resolved an issue where the report editor interface could crash when users attempted to add a new section to a completely empty report.

---------------------------------------

#### March 16, 2026 Release

This release includes updates to report progress tracking, multi-tasking capabilities in Report Insight, and backend infrastructure improvements for enhanced stability.

**Features & Improvements**

* **Real-time Report Progress Bar** - The Report List page now displays a real-time progress percentage for reports currently being generated, allowing users to track processing status.

* **Multi-Conversation & Concurrent Questions in Report Insight**
    * **Independent Conversations** - Users can now open multiple independent conversation windows within a single report. Each conversation separately retains its history, selected files, and AI settings.
    * **Concurrent Processing** - Users can now submit multiple questions simultaneously. The system processes these requests in parallel and provides real-time status updates for each.

* **File Upload Notifications** - Improved the notification mechanism for batch uploads. The system now displays clear error messages for unsupported or failed files, replacing the previous silent-skip behavior.

* **Optimized Source Citations** - Refined the display logic for the Deep 2.0 engine in Report Insight to ensure more accurate and consistent source citations.

**Bug Fixes**

* **Fixed Deleted Conversation Display** - Resolved an issue where previously deleted conversation histories would still appear on the Research and Report Insight pages.

---------------------------------------

#### March 2, 2026 Release

This update brings greater flexibility to report management, introduces smart safety guards for file deletion, and significantly accelerates file processing speeds through major infrastructure upgrades.

**Features & Improvements**

* **Custom Report Naming** - You can now name your reports! Whether during creation or afterward by clicking the "Rename" button, customizing report names is now fully supported, helping you keep your projects perfectly organized.

* **Smart Deletion Safety Guards** - To prevent accidental data loss, we have introduced a new verification system when deleting files:
    * If you try to delete a file that is currently being used to generate a report, the system will block the deletion to ensure the process finishes successfully.
    * If you try to delete a file that is linked to existing completed reports, a warning dialog will list the affected reports, asking for your confirmation before proceeding.
    * Additionally, the system will now clearly notify you if a report cannot be "Rebuild" because its source file was previously deleted.

**UI & Usability Enhancements**

* **Quick File Referencing** - Added a "+ Files" button in the Insight chat input field, making it easier and more intuitive to reference specific files during your conversation.

* **Keyboard Navigation** - When using @ to mention files, you can now use the Up/Down arrow keys to navigate the suggestion list and the Tab or Enter key to select.

* **Folder Management** - The "Delete Folder" button has been repositioned for a better user experience, and the loading speed when navigating into case folders has been improved.

---------------------------------------

#### February 23, 2026 Release

This update focuses on upgrading the report editing experience and implementing backend architecture improvements for faster generation.

**Improvements**

* **Side-by-Side Markdown Editor Preview** - We have upgraded the editor on the report editing page! It now supports a real-time side-by-side preview, allowing you to easily edit Markdown while simultaneously viewing the final formatted output, significantly boosting your editing efficiency.

* **Smart Task Routing for Faster Generation** - We have upgraded our backend processing architecture. "Fast" agent and "Deep" agent in Research tasks are now intelligently routed to dedicated processing queues. This reduces wait times and ensures all tasks are completed at optimal speeds.

* **Streamlined Agent Selection** - To ensure you always get the best results, we have retired the legacy Deep-0.9 and Deep-1.0 engines from the selector in Research page. This simplifies the interface, allowing you to focus on our latest and most capable models.

---------------------------------------

#### February 2, 2026 Release

This update introduces the powerful Deep 2.0 analysis engine, alongside improvements to export formatting and file compatibility.

**Major Updates**

* **Introducing Deep 2.0** - We have introduced the Deep 2.0 engine into the Research and Insight. This infrastructure upgrade significantly enhances data consistency and reliability, delivering higher-quality, more structured analysis and insights.

**Improvements**

* **Support for Underlines in Word Export** - We have added support for exporting underline formatting. Underlined text displayed in the web report now renders correctly in downloaded DOCX files, ensuring your documents look exactly as intended.

* **Enhanced PDF Compatibility** - We have upgraded our file processing engine to better handle structurally damaged or older PDF files. This ensures smoother previews and processing, significantly reducing file read errors.

* **Responsive "Stop" Button** - The behavior of the "Stop" button in the Research and Insight has been optimized. Clicking it now instantly halts the generation process, and the task will not resume unexpectedly after a page refresh, giving you better control.

---------------------------------------

#### January 26, 2026 Release

This update focuses on streamlining the subscription experience and improving system performance for image processing and file access.

**Features & Improvements**

* **Enhanced Pricing Page** - We have redesigned the Pricing Plan page to clearly present all options and plan differences. Additionally, we introduced a Bulk Purchase feature, allowing you to buy multiple credit packages at once for greater flexibility.

* **Vision-to-Text Performance Boost** - We upgraded the core engine for our Vision-to-text tasks. This improvement delivers faster and more reliable image content recognition, ensuring a smoother report generation process.

* **Optimized File Viewing & Downloading** - The mechanisms for the Source File Viewer and download buttons have been improved. This update ensures a more secure and stable experience when loading or retrieving your documents.

---------------------------------------

#### January 19, 2026 Release

This update introduces a redesigned settings interface for more intuitive account management, upgrades our file access security protocols, and adds self-service BAA downloads.

**Features & Improvements**

* **Redesigned Settings Page** - We have revamped the settings page with a new tabbed layout, introducing "User Settings" and a brand new "Legal & Compliance" section. This enhanced structure provides quicker navigation and a cleaner, more intuitive user experience.

* **Self-Service BAA Access** - Within the new "Legal & Compliance" tab, we have added the ability to check the status of and download your BAA (Business Associate Agreement). Users with compliance requirements can now access these documents directly within the platform.

**Security & Stability**

* **Enhanced File Access Security** - We have upgraded the mechanism for viewing and downloading files. The new architecture utilizes time-sensitive, secure links, which significantly improves data security while also enhancing overall system stability.

---------------------------------------

#### January 12, 2026 Release

This update focuses on optimizing the synchronization mechanism with Chronicle, enhancing security features, and resolving interruptions in report generation.

**Features & Improvements**

* **Chronicle Document Auto-Sync** - We have introduced real-time integration with Chronicle. Now, when documents are updated within Chronicle, the system automatically triggers synchronization, ensuring your files remain current without manual intervention.

* **Enhanced API Key Security** - The Chronicle Integration settings interface has been improved. The API Key input field now supports masked display, hiding actual characters to further protect your credentials.

**Bug Fixes**

* **Fixed Report Generation Stalling** - Resolved an issue where reports would occasionally get stuck in the "Researching" state or generate duplicate content. The stability of report delivery has been significantly improved.

---------------------------------------

#### January 5, 2026 Release

This update focuses on optimizing the payment synchronization, alongside fixes for report viewing stability.

**Improvements**

* **Enhanced Payment Synchronization** - We improved the synchronization mechanism for one-time payments. This ensures that your purchase details and transaction statuses are reflected in your account more rapidly and accurately.

**Bug Fixes**

* **Report Citation Display Fix** - Fixed an issue where error messages or display anomalies could occur when scrolling down to the "References" section while viewing reports online. All citations now display correctly without interruption.

---------------------------------------

#### [2025 Release History](/guide/release-history-2025)

---------------------------------------

#### [2024 Release History](/guide/release-history)

---------------------------------------
