# MS Annika

MS Annika is a crosslink search engine based on [MS Amanda](https://dx.doi.org/10.1021/pr500202e), aimed at identifying crosslinks of cleavable and non-cleavable crosslinkers from MS2 and MS3 spectra.

**You can read more about MS Annika here:**

| Description                | URL                                                                                    |
|:---------------------------|:---------------------------------------------------------------------------------------|
| MS Annika 3.0 Pre-Print:   | [doi.org/10.1101/2024.09.03.610962](https://doi.org/10.1101/2024.09.03.610962)         |
| MS Annika 2.0 Publication: | [doi.org/10.1021/acs.jproteome.3c00325](https://doi.org/10.1021/acs.jproteome.3c00325) |
| MS Annika 1.0 Publication: | [doi.org/10.1021/acs.jproteome.0c01000](https://doi.org/10.1021/acs.jproteome.0c01000) |
| IMP PD Nodes Website:      | [ms.imp.ac.at/?action=ms-annika](https://ms.imp.ac.at/?action=ms-annika)               |

**This repository contains the latest release versions of MS Annika:**

| Version | Download URL |
|:--------|:-------------|
| Latest MS Annika 3.0 [version](https://raw.githubusercontent.com/hgb-bin-proteomics/MSAnnika/master/releases/latest/PD3.1/version.txt) for Proteome Discoverer 3.1 | [**download**](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/releases/latest/PD3.1/latest.zip) |
| Latest MS Annika 2.0 [version](https://raw.githubusercontent.com/hgb-bin-proteomics/MSAnnika/master/releases/latest/PD3.0/version.txt) for Proteome Discoverer 3.0 | [**download**](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/releases/latest/PD3.0/latest.zip) |
| Latest MS Annika 2.0 [version](https://raw.githubusercontent.com/hgb-bin-proteomics/MSAnnika/master/releases/latest/PD2.5/version.txt) for Proteome Discoverer 2.5 | [**download**](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/releases/latest/PD2.5/latest.zip) |
| Latest MS Annika 1.0 [version](https://raw.githubusercontent.com/hgb-bin-proteomics/MSAnnika/master/releases/latest/PD2.4/version.txt) for Proteome Discoverer 2.4 | [**download**](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/releases/latest/PD2.4/latest.zip) |
| Latest MS Annika 1.0 [version](https://raw.githubusercontent.com/hgb-bin-proteomics/MSAnnika/master/releases/latest/PD2.3/version.txt) for Proteome Discoverer 2.3 | [**download**](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/releases/latest/PD2.3/latest.zip) |

A list of changes in every version can be found in [HISTORY.md](https://github.com/hgb-bin-proteomics/MSAnnika/blob/master/HISTORY.md).

*Please note that only MS Annika 3.0 (and above) supports identification of non-cleavable crosslinks and only MS Annika 2.0 (and above) supports identification from MS2-MS2-based acquisition workflows!*

## Installation

MS Annika is a plug-in for the proteomics software [Proteome Discover](https://www.thermofisher.com/at/en/home/industrial/mass-spectrometry/liquid-chromatography-mass-spectrometry-lc-ms/lc-ms-software/multi-omics-data-analysis/proteome-discoverer-software.html)
by Thermo Fisher Scientific. Installation of MS Annika requires:

- Installation of Proteome Discoverer (can be downloaded for free from [here](https://www.thermofisher.com/at/en/home/industrial/mass-spectrometry/liquid-chromatography-mass-spectrometry-lc-ms/lc-ms-software/multi-omics-data-analysis/proteome-discoverer-software.html))
  - (Requirements of Proteome Discoverer apply)
- Installation of MS Annika via the installer available from this repository
  - There are no additional requirements other than Proteome Discoverer
  - Users will be asked to accept the MS Annika license agreement (MS Annika is licensed as freeware)
  - The typical installation of MS Annika does not take longer than 5 minutes

The [tutorial](#Tutorial) also covers the installation in detail.

## Usage

MS Annika makes use of the workflow interface in Proteome Discoverer, which should be straight-forward to use. Step by step instructions for people
unfamiliar with Proteome Discoverer are given in the [tutorial](#Tutorial). The below sections also give an overview of parameters, results, example workflows and example data. Typically an analysis with MS Annika takes a few minutes for small samples and up to a few hours for larger samples and proteome-wide searches.

## Parameters & Results

Please refer to the [MS Annika User Manual](https://github.com/hgb-bin-proteomics/MSAnnika/blob/master/MS_Annika_3.0_UserManual.pdf) for a detailed description of all MS Annika parameters as
well as descriptions of all result tables. For further down-stream analysis of MS Annika results we recommend taking a look at [MS Annika Extensions](https://github.com/hgb-bin-proteomics/MSAnnika_Extensions).

## Tutorial

A tutorial of how to use MS Annika 3.0 can be found here: [Text](https://github.com/hgb-bin-proteomics/MSAnnika/blob/master/tutorial/MS_Annika_3.0_Tutorial.pdf) / [Video](https://www.youtube.com/watch?v=L1lVt35PYv4)

## Example Files

Example files to try MS Annika 3.0 can either be downloaded from [PRIDE](https://www.ebi.ac.uk/pride/archive/projects/PXD041955) or directly here:
- Minimal example for a cleavable crosslink MS2 search: [MGF + fasta](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/examples/data.zip)
- RAW file for a non-cleavable crosslink MS2 search: [RAW](https://ftp.pride.ebi.ac.uk/pride/data/archive/2020/07/PXD014337/XLpeplib_Beveridge_QEx-HFX_DSS_R1.raw)
- RAW file for a cleavable crosslink MS3 search: [RAW](https://ftp.pride.ebi.ac.uk/pride/data/archive/2023/08/PXD041955/20211219_Eclipse_LC4_G2_Trap_backflash_Peplib20_DSSO_pl1_MS3_OTOTOT.raw)

## Example Workflows

Example workflows that can be used in Proteome Discoverer:

- Proteome Discoverer 3.0 / 3.1:
  - DSS/BS3 MS2 search (CID, ETD, HCD, stepped HCD): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.1/DSS.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.1/DSS.zip)
  - DSS/BS3 MS2 search (for large datasets and proteome-wide searches, CID, ETD, HCD, stepped HCD): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.1/DSS_big.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.1/DSS_big.zip)
  - DSSO MS2 search (CID, ETD, HCD, stepped HCD): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2.zip)
  - DSSO MS2-MS3 search (MS3 recorded in the orbitrap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2_MS3_Orbitrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2_MS3_Orbitrap.zip)
  - DSSO MS2-MS3 search (MS3 recorded in the ion trap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2_MS3_Iontrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_MS2_MS3_Iontrap.zip)
  - DSBSO MS2 search (CID, ETD, HCD, stepped HCD): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2.zip)
  - DSBSO MS2-MS3 search (MS3 recorded in the orbitrap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2_MS3_Orbitrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2_MS3_Orbitrap.zip)
  - DSBSO MS2-MS3 search (MS3 recorded in the ion trap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2_MS3_Iontrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSBSO_MS2_MS3_Iontrap.zip)
- Proteome Discoverer 2.5:
  - DSSO MS2 search (CID, ETD, HCD, stepped HCD): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2.zip)
  - DSSO MS2-MS3 search (MS3 recorded in the orbitrap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2_MS3_Orbitrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2_MS3_Orbitrap.zip)
  - DSSO MS2-MS3 search (MS3 recorded in the ion trap): [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2_MS3_Iontrap.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD2.5/DSSO_MS2_MS3_Iontrap.zip)

The provided workflows also require the installation of [MS Amanda](https://dx.doi.org/10.1021/pr500202e) which can be downloaded [here](https://ms.imp.ac.at/?action=ms-amanda).

The general processing workflow for almost any crosslink search is depicted [here](workflows/general_wf.png).

For MS2 searches (CID, ETD, HCD, stepped HCD) it can also be beneficial to employ the [IMP MS2 Spectrum Processor](https://ms.imp.ac.at/?action=spectrum-processor) node, an example workflow for Proteome Discoverer 3.0 is given here:

- DSSO MS2 search with IMP MS2 Spectrum Processor: [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_IMP_MS2.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/PD3.0/DSSO_IMP_MS2.zip)

This workflow additionally requires the installation of the [IMP MS2 Spectrum Processor](https://ms.imp.ac.at/?action=spectrum-processor) node beforehand, which can be directly downloaded from [here (Proteome Discoverer 3.0)](https://ms.imp.ac.at/?file=spectrum-processor/ms2spectrumprocessor_3.0.zip).

## Support for MGF and timsTOF Data

The following MS Annika versions support MGF\* and timsTOF\*\* data input:
- Proteome Discoverer 3.1: [MS Annika 2.0 v2.2.1](https://github.com/hgb-bin-proteomics/MSAnnika/releases/tag/v2.2.1) or greater (e.g. [**latest**](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/releases/latest/PD3.1/latest.zip))
- Proteome Discoverer 3.0: [MS Annika 2.0 v1.1.4fix](https://github.com/hgb-bin-proteomics/MSAnnika/releases/tag/v1.1.4fix)
- Proteome Discoverer <=2.5: [MS Annika 1.0 v1.0.0](https://github.com/hgb-bin-proteomics/MSAnnika/releases/tag/v1.0.0)\*\*\*

\*MS Annika 3.0 only supports MS2 search for MGF files since MGF files don't contain sufficient MS3 information.  
\*\*optionally requires installation of the Bruker Ion Mobility reader to display ion mobilities in Proteome Discoverer, the node is not needed for crosslink search.  
\*\*\*requires installation of the [IMP MS2 Spectrum Processor](https://ms.imp.ac.at/?action=spectrum-processor) node.

## Getting Help

In case something isn't working or if you need any help with MS Annika or one of
the MS Annika extensions, please don't hesitate to reach out to us. You can open
up an issue [here](https://github.com/hgb-bin-proteomics/MSAnnika/issues) or
start a discussion
[there](https://github.com/hgb-bin-proteomics/MSAnnika/discussions).
We are usually fast to respond on GitHub and other users might be able to help
too! Alternatively, you can always drop us an email at the addresses
[below](#contact).

## Known Issues

[List of known issues](https://github.com/hgb-bin-proteomics/MSAnnika/issues)

## Contributing & Source Code

The MS Annika codebase contains proprietary code and therefore can't be made open source. If you want to contribute to the
development of MS Annika please contact us and we are happy to team up!

## Citing

If you are using MS Annika please cite:
```
MS Annika 2.0 Identifies Cross-Linked Peptides in MS2–MS3-Based Workflows at High Sensitivity and Specificity
Micha J. Birklbauer, Manuel Matzinger, Fränze Müller, Karl Mechtler, and Viktoria Dorfer
Journal of Proteome Research 2023 22 (9), 3009-3021
DOI: 10.1021/acs.jproteome.3c00325
```
or
```
MS Annika: A New Cross-Linking Search Engine
Georg J. Pirklbauer, Christian E. Stieger, Manuel Matzinger, Stephan Winkler, Karl Mechtler, and Viktoria Dorfer
Journal of Proteome Research 2021 20 (5), 2560-2569
DOI: 10.1021/acs.jproteome.0c01000
```

## Contact

- [micha.birklbauer@fh-hagenberg.at](mailto:micha.birklbauer@fh-hagenberg.at)
- [viktoria.dorfer@fh-hagenberg.at](mailto:viktoria.dorfer@fh-hagenberg.at)
